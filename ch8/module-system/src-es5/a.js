export function unique(arr) {
    return arr.filter(function (v, i, a) { return a.indexOf(v) === i; });
}
