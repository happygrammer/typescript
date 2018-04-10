/**
 * @author happygrammer
 */
interface PersonType {
    name: string;
    hello(this: PersonType, name2: string): string;
}
let typedPerson: PersonType = {
    name: "Happy",
    hello: function (this: PersonType, name2: string): string {
        let message = `Hello, ${this.name + name2}`;
        return message;
    }
};

console.log(typedPerson.hello("World"));