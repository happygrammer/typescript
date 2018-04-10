/**
 * @author happygrammer
 */
// 동물
namespace Animal {
    export function run() {
        console.log("동물이 달립니다!");
    }
    // Animal.Land.run();
    // 하위 네임스페이스 요소는 호출 불가
}

// 육상 동물
namespace Animal.Land {
    Animal.run();

    export function run() {
        console.log("육상 동물이 달립니다!");
    }
}

// 애완 동물
namespace Animal.Land.Pet {
    Animal.Land.run();

    export function run() {
        console.log("애완 동물이 달립니다!");
    }

    // 고양이 클래스
    export class Cat {
        run() {
            Animal.Land.Pet.run();
        }
    }
}

let cat = new (Animal.Land.Pet).Cat();
cat.run();