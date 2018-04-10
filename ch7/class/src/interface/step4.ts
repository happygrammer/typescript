/**
 * @author happygrammer
 */
interface Person {
    name: string;
    city: string;
}

let person4: Person[] = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" }
];

console.log(JSON.stringify(person4));