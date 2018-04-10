/**
 * @author happygrammer
 */
interface Person {
    name: string;
    city: string;
}
interface PersonItems extends Array<Person> { }

let person5: PersonItems = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" }
];

console.log(JSON.stringify(person5));