/**
 * @author happygrammer
 */
let x: [string, number];
x = ["tuple", 100];
console.log(typeof x, typeof x[0], typeof x[1]);
console.log(x[0].substr(0, 2), x[1].toFixed(2));

let x2: [string, boolean] = ["tuple", true, "tuple2", false];
console.log(x2);