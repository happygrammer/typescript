var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("car", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    exports.Car = Car;
});
define("taxi", ["require", "exports", "car"], function (require, exports, car_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Taxi = (function (_super) {
        __extends(Taxi, _super);
        function Taxi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Taxi;
    }(car_1.Car));
    exports.Taxi = Taxi;
});
//# sourceMappingURL=out.js.map