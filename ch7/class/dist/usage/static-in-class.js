class Circle {
    static getArea(radius) {
        this.circleArea = radius * radius * Circle.pi;
        return this.circleArea;
    }
    static set area(pArea) {
        Circle.circleArea = pArea;
    }
    get area() {
        return Circle.circleArea;
    }
}
Circle.pi = 3.14;
Circle.circleArea = 0;
console.log("1번 : " + Circle.getArea(3));
Circle.area = 100;
let circle = new Circle();
console.log("2번 : " + circle.area);
