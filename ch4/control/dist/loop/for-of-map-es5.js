let map = {};
map["one"] = 1;
map["one"] = 2;
map["one"] = 3;
for (let entry in map) {
    console.log(entry);
}
console.log(map["one"]);
