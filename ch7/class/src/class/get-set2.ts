/**
 * @author happygrammer
 */
class Student2 {
    private studentName: string;
    private studentBirthYear: number;

    get name(): string {
        return this.studentName;
    }

    set name(name: string) {
        // 포함되면 0, 포함되지 않으면 -1
        if (name.indexOf("happy") !== 0) {
            this.studentName = name;
        }
    }

    get birthYear(): number {
        return this.studentBirthYear;
    }

    set birthYear(year: number) {
        if (year <= 2000) {
            this.studentBirthYear = year;
        }
    }
}

let student2 = new Student2();

student2.birthYear = 2001; // set
console.log("1번 : " + student2.birthYear); // get

student2.birthYear = 2000; // set
console.log("2번 : " + student2.birthYear); // get

student2.name = "happy"; // set
console.log("3번 : " + student2.name); // get

student2.name = "lucky"; // set
console.log("4번 : " + student2.name); // get