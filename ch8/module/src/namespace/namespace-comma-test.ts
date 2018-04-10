namespace MyAnimal.Land {
    export function run() {
        console.log("육상 동물이 달립니다!");
    }
}

namespace MyAnimal {
    // run(); // 다른 이름 영역이므로 사용할 수 없음
    MyAnimal.Land.run();
}