/**
 * @author happygrammer
 * target이 ES5여도 동작하는 맵.
 */
let map: { [key: string]: number; } = {};
map["one"] = 1;
map["one"] = 2;
map["one"] = 3;

for (let entry in map) {
    console.log(entry);
}

console.log(map["one"]);