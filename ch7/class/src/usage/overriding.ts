/**
 * @author happygrammer
 */
class Bird {
    constructor() { }
    flight(kmDistance: number = 0, kmSpeed: number = 0) {
        console.log(`새가 ${kmDistance}km를 ${kmSpeed}km의 속도로 비행했습니다.`);
    }
}
class Eagle extends Bird {
    constructor() {
        super();
    }

    flight(kmDistance2: number = 0) {
        console.log(`독수리가 ${kmDistance2}km를 비행했습니다.`);
    }
}

let bird = new Bird();
bird.flight(1000, 100);

let eagle = new Eagle();
eagle.flight();
eagle.flight(1000);