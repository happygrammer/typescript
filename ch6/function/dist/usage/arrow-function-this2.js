var typedPerson = {
    name: "Happy",
    hello: function (name2) {
        var message = "Hello, " + (this.name + name2);
        return message;
    }
};
console.log(typedPerson.hello("World"));
