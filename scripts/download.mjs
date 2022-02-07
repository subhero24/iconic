import Url from "url";
import Path from "path";
import Zipper from "zip-unzip-promise";
import Filesystem from "fs-extra";

import fetch from "node-fetch";

const scriptsDir = Path.dirname(Url.fileURLToPath(import.meta.url));
const currentDir = Path.resolve(scriptsDir, "..");

const downloadUrl = "https://iconic.app/icons/iconic/iconic.zip";
const downloadDir = Path.resolve(currentDir, "download");
const downloadFilename = "iconic.zip";
const downloadFilePath = Path.resolve(downloadDir, downloadFilename);
const downloadIconsDir = Path.resolve(downloadDir, "Iconic", "svg");

const iconsDir = Path.resolve(currentDir, "icons");
const proIconsDir = Path.resolve(iconsDir, "pro");
const freeIconsDir = Path.resolve(iconsDir, "free");

const imageRegex = /<img src="(https:\/\/iconic\.app\/icons\/iconic\/png\/white\/(.*))">/g;

await Filesystem.ensureDir(downloadDir);
await Filesystem.ensureDir(proIconsDir);

// Download free icons
await download(downloadUrl, downloadFilePath);
await Zipper.unzip(downloadFilePath, downloadDir);
await Filesystem.move(downloadIconsDir, freeIconsDir);
await Filesystem.remove(downloadDir);

// Download pro icon images
let body =
	"action=load-contents&setup%5Btrigger%5D=auto&setup%5Bobject_type%5D=icon&setup%5Btemplate_part_id%5D=icon-grid-icon&setup%5Bnone_part_id%5D=&setup%5Bmore_part_id%5D=icon-grid-load-more&setup%5Bsource%5D=category&setup%5Bquery%5D=pro&setup%5Bcount%5D=500&setup%5Bdelay%5D=0&setup%5Boffset%5D=0";
let method = "POST";
let headers = { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" };
let response = await fetch("https://iconic.app/c/availability/pro/", { body, method, headers });
let responseText = await response.text();
let responseMatches = responseText.matchAll(imageRegex);
for (let match of responseMatches) {
	let [url, filename] = match.slice(1);
	let imageFilePath = Path.resolve(proIconsDir, filename);
	await download(url, imageFilePath);
}

function download(url, path) {
	return new Promise((resolve, reject) => {
		fetch(url).then((response) => {
			let stream = Filesystem.createWriteStream(path);
			stream.on("finish", resolve);
			stream.on("error", reject);
			response.body.pipe(stream);
		});
	});
}
