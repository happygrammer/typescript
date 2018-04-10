(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function unique(arr) {
        console.log("a 모듈");
        return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
    exports.unique = unique;
});
