let list: Map<number, string> = new Map<number, string>();
list.set(1, "one");
list.set(2, "two");
list.set(3, "three");

console.log(list);

if (list.delete(2)) {
    console.log(list);
}

list.clear();
console.log(list);