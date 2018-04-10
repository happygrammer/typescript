class Filter {
    unique(array) {
        return array.filter((v, i, array) => array.indexOf(v) === i);
    }
}
let myFilter = new Filter();
let resultFilter = myFilter.unique(["a", "b", "c", "a", "b"]);
console.log(resultFilter);
