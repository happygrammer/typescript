class ArrayConvertor {
    constructor(elms) {
        this.elements = elms;
    }
    array2string() {
        let text = "";
        for (let i = 0; i < this.elements.length; i++) {
            if (i > 0) {
                text += " ";
            }
            text += this.elements[i].toString();
        }
        return text;
    }
    getValue(elms, index) {
        return elms[index];
    }
}
let arr = [1, 2];
let numConvertor = new ArrayConvertor(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 0));
let arr2 = new Array();
arr2.push("a");
arr2.push("b");
let stringConvertor = new ArrayConvertor(arr2);
console.log(stringConvertor.array2string());
console.log(stringConvertor.getValue(arr2, 0));
