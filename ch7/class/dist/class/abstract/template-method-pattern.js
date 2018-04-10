class AbstractBird {
    fly() {
        this.flySound("파닥파닥");
    }
    getHabitat() {
        console.log(`<${this.birdName}>의 서식지는 <${this.habitat}> 입니다.`);
    }
}
class WildGoose extends AbstractBird {
    constructor(birdName, habitat) {
        super();
        this.birdName = birdName;
        this.habitat = habitat;
    }
    flySound(sound) {
        console.log(`<${this.birdName}>가 <${sound}> 날아갑니다.`);
    }
}
let wildGoose = new WildGoose("기러기", "순천만 갈대밭");
wildGoose.fly();
wildGoose.getHabitat();
