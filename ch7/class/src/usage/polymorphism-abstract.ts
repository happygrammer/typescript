abstract class Train {
    constructor(protected speed: number) { }

    speedUp(): void {
        this.speed++;
    }

    abstract getSpeed(): number;
}

class Ktx extends Train {
    constructor(protected speed: number) {
        super(speed);
    }

    public getSpeed(): number {
        return this.speed;
    }

    public speedUpUp(): void {
        this.speed += 2;
    }
}

let ktx: Train = new Ktx(300);
console.log("현재 속도 : " + ktx.getSpeed() + "km");
ktx.speedUp();
console.log("현재 속도 : " + ktx.getSpeed() + "km");