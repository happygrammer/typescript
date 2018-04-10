/**
 * @author happygrammer
 */
class Circle {
    private static pi: number = 3.14;
    static circleArea: number = 0;

    static getArea(radius: number) {
        this.circleArea = radius * radius * Circle.pi;
        return this.circleArea;
    }

    static set area(pArea: number) {
        Circle.circleArea = pArea;
    }
    get area(): number {
        return Circle.circleArea;
    }
}

// console.log(Circle.pi);
console.log("1번 : " + Circle.getArea(3));

// 정적 멤버 변수인 circleArea에 값 설정
Circle.area = 100;

let circle = new Circle();
// 정적 멤버 변수인 circleArea를 통해 클래스와 객체 간에 값을 공유함
console.log("2번 : " + circle.area);