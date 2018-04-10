class Planet {
    constructor() {
        this.isTransduction = true;
    }
    getIsTransduction() {
        return this.isTransduction;
    }
    stopTransduction() {
        console.log("stop1");
        this.isTransduction = false;
    }
}
class Earth extends Planet {
    constructor() {
        super(...arguments);
        this.features = ["soil", "water", "oxyzen"];
    }
    stopTransduction() {
        console.log("stop2");
        this.isTransduction = false;
    }
}
let earth = new Earth();
earth.diameter = 12656.2;
console.log("1번 : " + earth.diameter);
console.log("2번 : " + earth.getIsTransduction());
earth.stopTransduction();
console.log("3번 : " + earth.getIsTransduction());
