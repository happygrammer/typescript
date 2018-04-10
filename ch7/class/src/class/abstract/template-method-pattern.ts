/**
 * @author happygrammer
 */
abstract class AbstractBird {
    // 추상 멤버 변수
    abstract birdName: string;
    abstract habitat: string;

    // 추상 메서드
    abstract flySound(sound: string);

    // 구현 메서드
    fly(): void {
        this.flySound("파닥파닥");
    }

    // 구현 메서드
    getHabitat(): void {
        console.log(`<${this.birdName}>의 서식지는 <${this.habitat}> 입니다.`);
    }

}

class WildGoose extends AbstractBird {

    // 추상 멤버 변수를 상속함
    constructor(public birdName: string, public habitat: string) {
        super();
    }

    // 추상 메서드를 오버라이딩
    flySound(sound: string) {
        console.log(`<${this.birdName}>가 <${sound}> 날아갑니다.`);
    }
}

let wildGoose = new WildGoose("기러기", "순천만 갈대밭");
wildGoose.fly();
wildGoose.getHabitat();
/*
모두 Public이다라는 점을 주의함
*/