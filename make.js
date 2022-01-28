const fs = require("fs");
const minfiy = require("babel-minify");
var minified = minfiy(fs.readFileSync("./answer.js")).code;

fs.writeFileSync("minified.js", minified)
fs.writeFileSync("loader.html", `<a href="javascript:${encodeURIComponent(minified)}">answer.js</a>`)
fs.writeFileSync("README.md", `${fs.readFileSync("./readme-template.md")}\n\`\`\`\n${minified}\`\`\``)