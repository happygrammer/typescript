;
let format = function (str, isUpper) {
    if (isUpper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(format("1 : Happy!"));
console.log(format("2 : Happy!", true));
console.log(format("3 : Happy!", false));
