class Profile {
    constructor() {
        this.name = "happy!";
    }
}
class Accessor1 {
    getKey(obj) {
        return obj["name"];
    }
    getKey2(obj) {
        return obj["name"];
    }
    get(obj) {
        let objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    }
}
let ac = new Accessor1();
console.log(ac.getKey(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));
