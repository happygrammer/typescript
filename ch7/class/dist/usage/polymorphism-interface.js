class PoliceOfficer {
    constructor() {
        this.getAlias = () => "happy";
    }
    getAge() {
        return 10;
    }
    hasClub() {
        return true;
    }
}
let policeMan = new PoliceOfficer();
console.log(policeMan.getAlias());
console.log(policeMan.getAge());
