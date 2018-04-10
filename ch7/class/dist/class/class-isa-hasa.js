class Flashlight {
    constructor(lightIntensity) {
        this.lightIntensity = lightIntensity;
    }
}
class Bicycle {
    constructor(numberOfWheel) {
        this.numberOfWheel = numberOfWheel;
    }
    getNumberOfWheel() {
        return this.numberOfWheel;
    }
}
class MountainBike extends Bicycle {
    constructor(numberOfWheel, hasBackSaddle) {
        super(numberOfWheel);
        this.numberOfWheel = numberOfWheel;
        this.hasBackSaddle = hasBackSaddle;
        this.flashlight = new Flashlight(90);
    }
    getHasBackSaddle() {
        return this.hasBackSaddle;
    }
    getNumberOfWheel() {
        return this.numberOfWheel;
    }
}
let hasBackSaddle = true;
let numberOfWheel = 2;
let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("자전거의 안장 유무 : " + mountainBike.getHasBackSaddle());
console.log("자전거의 바퀴 개수 : " + mountainBike.getNumberOfWheel());
