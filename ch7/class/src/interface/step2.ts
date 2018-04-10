/**
 * @author happygrammer
 */
let person2: { name: string, city: string }[];
person2 = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" }
];

console.log(JSON.stringify(person2));