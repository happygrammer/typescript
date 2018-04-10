/**
 * @author happygrammer
 */
import { MyCar as SuperCar, SuperEngine } from "./my-car";
export var CarInfo;
(function (CarInfo) {
    CarInfo.car = SuperCar;
    CarInfo.engine = SuperEngine;
    function Hello() {
        console.log("hello");
    }
    CarInfo.Hello = Hello;
})(CarInfo || (CarInfo = {}));
