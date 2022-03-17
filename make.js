const fs = require("fs");
const minify = require("babel-minify");
var minified = minify(fs.readFileSync("./answer.js")).code;

fs.writeFileSync("minified.js", minified)
fs.writeFileSync("loader.html", `<a href="javascript:${encodeURIComponent(minified)}">answer.js</a>`)
fs.writeFileSync("README.md", `${fs.readFileSync("./readme-template.md")}\n\`\`\`\njavascript:${encodeURIComponent(minified)}\n\`\`\``)