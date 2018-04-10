/**
 * @author happygrammer
 */
var person = {
    name: "Happy",
    hello: function (name2) {
        console.log("Hello, " + this.name + name2);
    }
};
person.hello("World");
