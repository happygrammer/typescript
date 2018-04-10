class ArrayList {
    constructor() {
        this.arrayList = [];
    }
    add(indexOrValue, value) {
        if (value !== undefined) {
            if (typeof indexOrValue === "number") {
                this.arrayList.splice(indexOrValue, 0, value);
            }
        }
        else {
            this.arrayList.push(indexOrValue);
        }
    }
    remove(index) {
        this.arrayList.splice(index, 1);
    }
    addAll(elements) {
        this.arrayList = [...this.arrayList, ...elements];
    }
    get(index) {
        return this.arrayList[index];
    }
    clear() {
        this.arrayList = [];
    }
    isEmpty() {
        return this.arrayList.length == 0 ? true : false;
    }
    set(index, value) {
        this.arrayList[index] = value;
    }
    toArray() {
        return this.arrayList;
    }
    size() {
        return this.arrayList.length;
    }
}
var aList = new ArrayList();
aList.add("a");
aList.add("b");
aList.add("c");
console.log("1번 add :", aList.toArray());
aList.add(1, "hi");
console.log("2번 index로 add :", aList.toArray());
aList.remove(1);
console.log("3번 remove(1) :", aList.toArray());
aList.addAll(["d", "e"]);
console.log("4번 addAll :", aList.toArray());
console.log("5번 get(2) :", aList.get(2));
console.log("6번 size() : ", aList.size());
aList.clear();
console.log("7번 size() : ", aList.size());
if (aList.isEmpty()) {
    console.log("8번 empty!");
}
