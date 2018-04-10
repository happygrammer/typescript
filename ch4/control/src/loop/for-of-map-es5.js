/**
 * @author happygrammer
 * target이 ES5여도 동작하는 맵
 */
var map = {};
map["one"] = 1;
map["one"] = 2;
map["one"] = 3;
for (var entry in map) {
    console.log(entry);
}
console.log(map["one"]);