let jsdom = require("jsdom").jsdom;
import fs = require("fs");
let html = fs.readFileSync("src/dom/index.html", "utf-8");

let doc = jsdom(html);
let window = doc.defaultView;
console.log(window.document.documentElement.outerHTML);
console.log(window.innerWidth);
console.log(typeof window.document.getElementsByClassName);