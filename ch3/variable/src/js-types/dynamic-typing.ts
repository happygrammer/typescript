/**
 * @author happygrammer
 */
let width = 10;
let height = 10.0;
let myNick = "happy";
let animals = ["tiger", "horse", "rhinoceros"];
let myFullName = { first: "happy", last: "grammer" };
console.log(typeof width, typeof height);
console.log(typeof myNick);
console.log(typeof animals, typeof myFullName);

if (typeof width === "number" && typeof height === "number") {
    console.log("area : ", width * height);
}