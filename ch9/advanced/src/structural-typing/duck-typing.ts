/**
 * @author happygrammer
 */
class Duck {
    speak() {
        console.log("Quak!");
    }

    swim() {
        console.log("Duck swimming");
    }
}

class Goose {
    speak() {
        console.log("squawk!");
    }

    swim() {
        console.log("Goose swimming");
    }
}

function swim(obj) {
    obj.speak();
    obj.swim();
}

let duck = new Duck();
let goose = new Goose();
swim(duck);
swim(goose);