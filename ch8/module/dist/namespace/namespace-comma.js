/**
 * @author happygrammer
 */
// 동물
var Animal;
(function (Animal) {
    function run() {
        console.log("동물이 달립니다!");
    }
    Animal.run = run;
    // Animal.Land.run();
    // 하위 네임스페이스 요소는 호출 불가
})(Animal || (Animal = {}));
// 육상 동물
(function (Animal) {
    var Land;
    (function (Land) {
        Animal.run();
        function run() {
            console.log("육상 동물이 달립니다!");
        }
        Land.run = run;
    })(Land = Animal.Land || (Animal.Land = {}));
})(Animal || (Animal = {}));
// 애완 동물
(function (Animal) {
    var Land;
    (function (Land) {
        var Pet;
        (function (Pet) {
            Animal.Land.run();
            function run() {
                console.log("애완 동물이 달립니다!");
            }
            Pet.run = run;
            // 고양이 클래스
            class Cat {
                run() {
                    Animal.Land.Pet.run();
                }
            }
            Pet.Cat = Cat;
        })(Pet = Land.Pet || (Land.Pet = {}));
    })(Land = Animal.Land || (Animal.Land = {}));
})(Animal || (Animal = {}));
let cat = new (Animal.Land.Pet).Cat();
cat.run();
