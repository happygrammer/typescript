import jsdom = require("jsdom");
import fs = require("fs");

jsdom.env(
  "https://en.wikipedia.org/wiki/Korea",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    let $ = window.$;
    $('a').each(function () {
      console.log($(this).text());
    });
  }
);