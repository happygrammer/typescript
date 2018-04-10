/**
 * @author happygrammer
 */
class Rectangle {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getArea() {
        return this.x * this.y;
    }
}

let rectangle = new Rectangle(1, 5);
let area: number = rectangle.getArea();
console.log(area);