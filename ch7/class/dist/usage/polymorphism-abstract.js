class Train {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed++;
    }
}
class Ktx extends Train {
    constructor(speed) {
        super(speed);
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    speedUpUp() {
        this.speed += 2;
    }
}
let ktx = new Ktx(300);
console.log("현재 속도 : " + ktx.getSpeed() + "km");
ktx.speedUp();
console.log("현재 속도 : " + ktx.getSpeed() + "km");
