"use strict";
exports.__esModule = true;
var MyLibrary;
(function (MyLibrary) {
    function getMaxNumber(array) {
        return Math.max.apply(Math, array);
    }
    MyLibrary.getMaxNumber = getMaxNumber;
    function getMinNumber(array) {
        return Math.min.apply(Math, array);
    }
})(MyLibrary = exports.MyLibrary || (exports.MyLibrary = {}));
