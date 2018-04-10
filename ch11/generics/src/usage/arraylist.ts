/**
 * @author happygrammer
 */
class ArrayList<T>{

    private arrayList: (T | number)[] = [];
    add(indexOrValue: T | number, value?: T) {
        if (value !== undefined) {
            // 타입 가드
            if (typeof indexOrValue === "number") {
                this.arrayList.splice(indexOrValue, 0, value);
            }
        } else {
            this.arrayList.push(indexOrValue);
        }
    }

    remove(index: number) {
        this.arrayList.splice(index, 1);
    }

    addAll(elements: T[]) {
        this.arrayList = [...this.arrayList, ...elements];
    }

    get(index: number): T | number {
        return this.arrayList[index];
    }

    clear() {
        this.arrayList = [];
    }

    isEmpty(): boolean {
        return this.arrayList.length == 0 ? true : false;
    }

    set(index: number, value: T) {
        // this.arrayList.splice(index, 0, value);
        this.arrayList[index] = value;
    }

    toArray(): (T | number)[] {
        return this.arrayList;
    }

    size(): number {
        return this.arrayList.length;
    }

}

var aList = new ArrayList<string>();
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