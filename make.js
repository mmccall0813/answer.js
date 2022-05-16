const fs = require("fs");
const minify = require("babel-minify");
var minified = minify(fs.readFileSync("./answer.js")).code;
var minifiedLegit = minify(fs.readFileSync("./legit.js")).code;

fs.writeFileSync("minified.js", minified)
fs.writeFileSync("minifiedLegit.js", minifiedLegit)
fs.writeFileSync("loader.html", `<a href="javascript:${encodeURIComponent(minified)}">answer.js</a>\n<a href="javascript:${encodeURIComponent(minifiedLegit)}">legit.js</a>`);
fs.writeFileSync("README.md", `${fs.readFileSync("./readme-template.md")}\n\`\`\`\njavascript:${encodeURIComponent(minified)}\n\`\`\``)