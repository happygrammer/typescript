function nevertest(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
}
console.log(nevertest("test"));
