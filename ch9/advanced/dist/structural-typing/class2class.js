class Animal {
    constructor(name, weight) { }
}
class Bird {
    constructor(speed) { }
}
let animal = new Animal("happy", 100);
let bird = new Bird(10);
animal = bird;
bird = animal;
