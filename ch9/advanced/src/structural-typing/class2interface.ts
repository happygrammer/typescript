/**
 * @author happygrammer
 */
interface Person {
    name: string;
}

class Employee {
    name: string;
}

let person: Person;
person = new Employee(); // 타입 호환이 가능함