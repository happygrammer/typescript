/**
 * @author happygrammer
 */
interface IName {
    name: string;
}

class Profile implements IName {
    name: string = "happy!";
}

class Accessor1 {

    getKey<T>(obj: T) {
        return obj["name"];
    }

    getKey2<T extends IName>(obj: T) {
        return obj["name"];
    }

    get(obj) {
        let objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    }

}

let ac = new Accessor1();
console.log(ac.getKey<IName>(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));