function check(p) {
    if (typeof p === "string") {
        return p;
    }
    else if (typeof p === "number") {
        return p;
    }
    else {
        return p;
    }
}
console.log(typeof check(1), check(1));
console.log(typeof check("hello"), check("hello"));
console.log(typeof check(true), check(true));
