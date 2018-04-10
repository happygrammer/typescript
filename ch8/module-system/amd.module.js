define("a", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function unique(arr) {
        return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
    }
    exports.unique = unique;
});
define("b", ["require", "exports", "a"], function (require, exports, a_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6];
    console.log(a_1.unique(data));
});
