class Student2 {
    get name() {
        return this.studentName;
    }
    set name(name) {
        if (name.indexOf("happy") !== 0) {
            this.studentName = name;
        }
    }
    get birthYear() {
        return this.studentBirthYear;
    }
    set birthYear(year) {
        if (year <= 2000) {
            this.studentBirthYear = year;
        }
    }
}
let student2 = new Student2();
student2.birthYear = 2001;
console.log("1번 : " + student2.birthYear);
student2.birthYear = 2000;
console.log("2번 : " + student2.birthYear);
student2.name = "happy";
console.log("3번 : " + student2.name);
student2.name = "lucky";
console.log("4번 : " + student2.name);
