var MyAnimal;
(function (MyAnimal) {
    var Land;
    (function (Land) {
        function run() {
            console.log("육상 동물이 달립니다!");
        }
        Land.run = run;
    })(Land = MyAnimal.Land || (MyAnimal.Land = {}));
})(MyAnimal || (MyAnimal = {}));
(function (MyAnimal) {
    // run(); // 다른 이름 영역이므로 사용할 수 없음
    MyAnimal.Land.run();
})(MyAnimal || (MyAnimal = {}));
