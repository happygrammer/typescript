/**
 * @author happygrammer
 */
let fruits = { "a": "apple", "b": "banana", "c": "cherry" };

for (let property in fruits) {
    console.log(property, fruits[property]);
}