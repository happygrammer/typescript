function getValue(obj, key) {
    return obj[key];
}
let numbersKeys = { one: 1, two: 2, three: 3 };
console.log(getValue(numbersKeys, "one"));
