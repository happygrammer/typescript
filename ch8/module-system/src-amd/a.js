define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function unique(arr) {
        console.log("a 모듈");
        return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
    exports.unique = unique;
});
