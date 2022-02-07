import Url from "url";
import Path from "path";
import Filesystem from "fs-extra";

import svgr from "@svgr/core";
import camelcase from "camelcase";

const scriptsDir = Path.dirname(Url.fileURLToPath(import.meta.url));
const currentDir = Path.resolve(scriptsDir, "..");

const iconsDir = Path.resolve(currentDir, "icons");
const proIconsDir = Path.resolve(iconsDir, "pro");
const freeIconsDir = Path.resolve(iconsDir, "free");

const sourceDir = Path.resolve(currentDir, "source");
const sourceIconsDir = Path.resolve(sourceDir, "icons");
const sourceIndexFilePath = Path.resolve(sourceDir, "index.js");
const sourceTypesFilePath = Path.resolve(sourceDir, "index.d.ts");

await Filesystem.remove(sourceDir);
await Filesystem.ensureDir(sourceDir);
await Filesystem.ensureDir(sourceIconsDir);

// Transform all free icons to react components
let freeIconFilenames = await Filesystem.readdir(freeIconsDir);
for (let filename of freeIconFilenames) {
	let iconPath = Path.resolve(freeIconsDir, filename);
	let iconContent = await Filesystem.readFile(iconPath, "utf-8");
	let iconComponentName = camelcase(filename.replace(/\.svg$/, ""), { pascalCase: true }) + "Icon";
	let iconComponentFilename = filename.replace(/\.svg$/, ".jsx");
	let iconComponentFilePath = Path.resolve(sourceIconsDir, iconComponentFilename);

	let component = await svgr.transform(iconContent, {}, { componentName: iconComponentName });
	let componentType = `export function ${iconComponentName}(props: any): any;\n`;
	let componentExport = `export { default as ${iconComponentName} } from './icons/${iconComponentFilename}';\n`;

	await Filesystem.writeFile(iconComponentFilePath, component);
	await Filesystem.writeFile(sourceIndexFilePath, componentExport, { flag: "a" });
	await Filesystem.writeFile(sourceTypesFilePath, componentType, { flag: "a" });
}

// Transform all pro icons to react components
let proIconFilenames = await Filesystem.readdir(proIconsDir);
for (let filename of proIconFilenames) {
	let iconPath = Path.resolve(proIconsDir, filename);
	let iconContent = await Filesystem.readFile(iconPath, "binary");

	// Component names can not start with a number
	if (filename === "3d-rotate.png") filename = "rotate-3d.png";

	let iconContentBase64 = Buffer.from(iconContent, "binary").toString("base64");
	let iconComponentName = camelcase(filename.replace(/\.png$/, ""), { pascalCase: true }) + "Icon";
	let iconComponentFilename = filename.replace(/\.png$/, ".jsx");
	let iconComponentFilePath = Path.resolve(sourceIconsDir, iconComponentFilename);

	let component = `import * as React from "react";

const url = 'url(data:image/png;base64,${iconContentBase64})';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ${iconComponentName}(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};`;

	let componentType = `export function ${iconComponentName}(props: any): any;\n`;
	let componentExport = `export { default as ${iconComponentName} } from './icons/${iconComponentFilename}';\n`;

	await Filesystem.writeFile(iconComponentFilePath, component);
	await Filesystem.writeFile(sourceIndexFilePath, componentExport, { flag: "a" });
	await Filesystem.writeFile(sourceTypesFilePath, componentType, { flag: "a" });
}
