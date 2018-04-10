function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let numbersKeys = { one: 1, two: 2, three: 3 };

console.log(getValue(numbersKeys, "one"));
// console.log(getValue(numbersKeys, "happy"));