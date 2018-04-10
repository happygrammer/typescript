"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom = require("jsdom");
var fs = require("fs");
var html = fs.readFileSync("src/dom/index.html", "utf-8");
jsdom.env(html, ["http://code.jquery.com/jquery.js"], function (err, window) {
    var $ = window.$;
    console.log($('input[name=userID]').attr("maxlength"));
    console.log($('input[name=userPW]').attr("maxlength"));
});
