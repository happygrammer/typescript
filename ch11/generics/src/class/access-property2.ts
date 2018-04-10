/**
 * @author happygrammer
 */
interface IName {
    name: string;
}

class Profile2 implements IName {
    name: string = "happy!";
}

class Accessor2<T extends IName> {

    getKey(obj: T) {
        return obj.name;
    }
}

let ac2 = new Accessor2();
console.log(ac2.getKey(new Profile2()));