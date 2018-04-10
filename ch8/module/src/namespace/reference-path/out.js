var Car;
(function (Car) {
    Car.auto = false;
})(Car || (Car = {}));
/// <reference path="car1.ts" />
var Car;
(function (Car) {
    var wheels;
    console.log(Car.auto);
    var Taxi = (function () {
        function Taxi() {
        }
        return Taxi;
    }());
})(Car || (Car = {}));
console.log(Car.auto);
//console.log(Car.wheels);
