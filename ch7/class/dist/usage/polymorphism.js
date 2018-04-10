class Led {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "LED => " + this.name;
    }
}
class Oled {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "OLED => " + this.name;
    }
}
class MonitorDisplayTest {
    display1(monitor) {
        if (monitor instanceof Led) {
            let myMonitor = monitor;
            return myMonitor.getName();
        }
        else if (monitor instanceof Oled) {
            let myMonitor = monitor;
            return myMonitor.getName();
        }
    }
    display2(monitor) {
        let myMonitor = monitor;
        return myMonitor.getName();
    }
}
let displayTest = new MonitorDisplayTest();
console.log(`
1번 ${displayTest.display1(new Led("LED TV"))}
2번 ${displayTest.display1(new Oled("OLED TV"))}
3번 ${displayTest.display2(new Led("LED TV"))}
4번 ${displayTest.display2(new Oled("OLED TV"))}`);
