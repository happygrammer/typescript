interface IPerson {
    height: number;
    getAlias: () => string;
    getAge(): number;
}

class PoliceOfficer implements IPerson {
    height: number;
    getAlias = () => "happy";
    getAge(): number {
        return 10;
    }
    hasClub() {
        return true; // 곤봉이 있음
    }
}

let policeMan: IPerson = new PoliceOfficer();
console.log(policeMan.getAlias());
console.log(policeMan.getAge());
// console.log(policeMan.hasClub()); // 접근 불가