System.register(["./a"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (a_1_1) {
                exportStar_1(a_1_1);
            }
        ],
        execute: function () {
            data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6];
            console.log("b 모듈");
        }
    };
});
