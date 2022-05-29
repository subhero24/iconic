import Url from "url";
import Path from "path";
import Filesystem from "fs-extra";

import svgr from "@svgr/core";
import camelcase from "camelcase";

const scriptsDir = Path.dirname(Url.fileURLToPath(import.meta.url));
const currentDir = Path.resolve(scriptsDir, "..");

const sourceIconsDir = Path.resolve(currentDir, "icons");
const sourceIconsProDir = Path.resolve(sourceIconsDir, "pro");
const sourceIconsFreeDir = Path.resolve(sourceIconsDir, "free");

const targetIconsDir = Path.resolve(currentDir, "source", "icons");
const indexFilePath = Path.resolve(currentDir, "source", "index.js");
const typesFilePath = Path.resolve(currentDir, "source", "index.d.ts");

await Filesystem.remove(targetIconsDir);
await Filesystem.remove(indexFilePath);
await Filesystem.remove(typesFilePath);

await Filesystem.ensureDir(targetIconsDir);

// Transform all free icons to react components
let freeIconFilenames = await Filesystem.readdir(sourceIconsFreeDir);
for (let filename of freeIconFilenames) {
	let filePath = Path.resolve(sourceIconsFreeDir, filename);
	let content = await Filesystem.readFile(filePath, "utf-8");

	let componentName = camelcase(filename.replace(/\.svg$/, ""), { pascalCase: true }) + "Icon";
	let componentFilename = filename.replace(/\.svg$/, ".jsx");
	let componentFilePath = Path.resolve(targetIconsDir, componentFilename);

	let component = await svgr.transform(content, {}, { componentName });
	let componentType = `export function ${componentName}(props: any): any;\n`;
	let componentExport = `export { default as ${componentName} } from './icons/${componentFilename}';\n`;

	await Filesystem.writeFile(componentFilePath, component);
	await Filesystem.writeFile(typesFilePath, componentType, { flag: "a" });
	await Filesystem.writeFile(indexFilePath, componentExport, { flag: "a" });
}

// Transform all pro icons to react components
let proIconFilenames = await Filesystem.readdir(sourceIconsProDir);
for (let filename of proIconFilenames) {
	let filePath = Path.resolve(sourceIconsProDir, filename);
	if (filename === "3d-rotate.png") filename = "rotate-3d.png";

	let content = await Filesystem.readFile(filePath, "binary");
	let contentBase64 = Buffer.from(content, "binary").toString("base64");
	let componentName = camelcase(filename.replace(/\.png$/, ""), { pascalCase: true }) + "Icon";
	let componentFilename = filename.replace(/\.png$/, ".jsx");
	let componentFilePath = Path.resolve(targetIconsDir, componentFilename);

	let component = `import * as React from "react";

const url = 'url(data:image/png;base64,${contentBase64})';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function ${componentName}(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};`;

	let componentType = `export function ${componentName}(props: any): any;\n`;
	let componentExport = `export { default as ${componentName} } from './icons/${componentFilename}';\n`;

	await Filesystem.writeFile(componentFilePath, component);
	await Filesystem.writeFile(typesFilePath, componentType, { flag: "a" });
	await Filesystem.writeFile(indexFilePath, componentExport, { flag: "a" });
}
