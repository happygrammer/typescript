System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function unique(arr) {
        console.log("a 모듈");
        return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
    exports_1("unique", unique);
    return {
        setters: [],
        execute: function () {
        }
    };
});
