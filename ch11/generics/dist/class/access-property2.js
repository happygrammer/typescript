class Profile2 {
    constructor() {
        this.name = "happy!";
    }
}
class Accessor2 {
    getKey(obj) {
        return obj.name;
    }
}
let ac2 = new Accessor2();
console.log(ac2.getKey(new Profile2()));
