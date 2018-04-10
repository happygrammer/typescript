class Vehicle {
    go() {
        console.log("Vehicle is moving");
    }
    stop() {
        console.log("Vehicle is stopping");
    }
}
class Taxi extends Vehicle {
    go() {
        console.log("Taxi is moving");
    }
}
let obj = new Taxi();
obj.go();
obj.stop();
