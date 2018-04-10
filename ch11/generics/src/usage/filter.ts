interface IFilter<T> {
    unique(array: Array<T>): Array<T>;
}

class Filter<T> implements IFilter<T>{
    unique(array: Array<T>): Array<T> {
        return array.filter((v, i, array) => array.indexOf(v) === i);
    }
}

let myFilter = new Filter<string>();
let resultFilter = myFilter.unique(["a", "b", "c", "a", "b"]);
console.log(resultFilter);