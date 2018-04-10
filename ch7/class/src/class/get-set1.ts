/**
 * @author happygrammer
 */
class Student {
    name: string;
    birthYear: number;
}

let student = new Student();

// 속성에 값 설정
student.name = "happy";
student.birthYear = 2017;

// 속성 값 읽기
console.log(student.name);
console.log(student.birthYear);