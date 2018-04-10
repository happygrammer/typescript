import jsdom = require("jsdom");
import fs = require("fs");
let html = fs.readFileSync("src/dom/index.html", "utf-8");

jsdom.env(
  html,
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    let $ = window.$;         
    console.log($('input[name=userID]').attr("maxlength"));
    console.log($('input[name=userPW]').attr("maxlength"));
  }
);