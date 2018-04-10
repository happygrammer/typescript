/**
 * @author happygrammer
 */
type myId = string;
type myAlias = string | undefined;
type User = {
    id: myId;
    alias?: myAlias;
    city: string;
};

let id1: User = { id: "happy1", city: "seoul" };
let id2: User = { id: "happy2", alias: undefined, city: "daegu" };
let id3: User = { id: "happy3", alias: "happy3!!", city: "pusan" };

console.log(typeof id1, id1);
console.log(typeof id2, id2);
console.log(typeof id3, id3);