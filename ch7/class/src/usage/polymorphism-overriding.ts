class Vehicle {
    public go(): void {
        console.log("Vehicle is moving");
    }

    public stop(): void {
        console.log("Vehicle is stopping");
    }
}

class Taxi extends Vehicle {

    public go(): void {
        console.log("Taxi is moving");
    }

}

let obj: Vehicle = new Taxi();
obj.go();
obj.stop();

// 업캐스팅(upcasting)으로 부모 클래스로 타입을 지정했지만 실행은 자식 클래스의 메서드를 호출함
// 오버라이딩이 되면 하위 클래스를 기준으로 실행함. 상위 클래스에서 정의한 메서드를 사용해야한다.