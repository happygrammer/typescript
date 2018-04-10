class Cat {
    constructor() {
        this.name = "cat";
        this.age = 13;
    }
}
class Dog {
    constructor() {
        this.name = "dog";
        this.leg = 4;
    }
}
function diffCheck(x) {
    if (x instanceof Dog) {
        console.log(x.name);
        console.log(x.leg);
    }
    console.log(x.name);
}
diffCheck(new Dog());
