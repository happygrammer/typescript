/**
 * @author happygrammer
 */
interface Monitor {
    getName(): string;
}

class Led implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return "LED => " + this.name;
    }
}

class Oled implements Monitor {
    constructor(private name: string) { }
    getName(): string {
        return "OLED => " + this.name;
    }
}

class MonitorDisplayTest {
    // 개선 전
    display1(monitor: Led | Oled) {
        if (monitor instanceof Led) {
            // 변수에 지정된 타입과 타입 어설션은 생략 가능
            let myMonitor: Led = <Led>monitor;
            return myMonitor.getName();
        }
        else if (monitor instanceof Oled) {
            let myMonitor: Oled = <Oled>monitor;
            return myMonitor.getName();
        }

    }
    // 개선 후
    display2(monitor: Monitor) {
        let myMonitor: Monitor = monitor;
        return myMonitor.getName();
    }
}

let displayTest = new MonitorDisplayTest();
console.log(`
1번 ${displayTest.display1(new Led("LED TV"))}
2번 ${displayTest.display1(new Oled("OLED TV"))}
3번 ${displayTest.display2(new Led("LED TV"))}
4번 ${displayTest.display2(new Oled("OLED TV"))}`);