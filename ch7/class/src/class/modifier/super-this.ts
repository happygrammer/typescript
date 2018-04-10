/**
 * @author happygrammer
 */
class PC {
    constructor(public hddCapacity: string) { }

    private ram: string = "0G";
    set ramCapacity(value: string) { this.ram = value; } // set 프로퍼티
    get ramCapacity() { return this.ram; } // get 프로퍼티

    protected getHddCapacity() {
        return this.hddCapacity;
    }
}

class Desktop extends PC {
    constructor(public hddCapacity: string) {
        // 부모 클래스의 생성자를 호출함
        super(hddCapacity);
    }

    getInfo() {
        console.log("1번 HDD 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("2번 HDD 용량 : " + this.getHddCapacity(), this.hddCapacity);

        this.hddCapacity = "2000G";
        console.log("3번 HDD 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("4번 HDD 용량 : " + this.getHddCapacity(), this.hddCapacity);

        super.ramCapacity = "16G"; // 부모 클래스의 set 프로퍼티로 값을 설정함
        console.log("5번 RAM 용량 : " + this.ramCapacity, super.ramCapacity);

        this.ramCapacity = "8G"; // 상속 받은 set 프로퍼티로 값을 설정함
        console.log("6번 RAM 용량 : " + this.ramCapacity, super.ramCapacity);
    }
}

let myDesktop = new Desktop("1000G");
myDesktop.getInfo();