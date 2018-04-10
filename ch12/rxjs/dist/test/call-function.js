var Rx = require('@reactivex/rxjs');
// 클래스는 메모리 상에 올라가 있는 정적 형태가 아니므로 문제가 된다.?
function outFunc(r) {
    console.log("outFunc : ", r);
}
class BufferTest {
    constructor() {
        this.start();
        this.lfunc = function (x) {
            console.log(x);
        };
    }
    // function 키워드를 사용하지 않는다.
    test(r) {
        this.result = r;
        console.log("r : ", r, this.result);
    }
    mapFunc(r) {
        console.log("mapFunc22", r);
        //this.mapFunc2(r); //또 다른 함수를 못부른다!!
        //또다른 함수를 부르려면 map을 한번더 써준다. 즉 연산자를 연이여서
        return r.push('h');
    }
    mapFunc2(r) {
        console.log("mapFunc33", r);
    }
    start() {
        const intervalTest = Rx.Observable.interval(10);
        const bufferTest = intervalTest.bufferCount(3);
        //const subscribeTest = bufferTest.subscribe(val => this.result = val, console.log(this.val), console.log(this.result))
        //const subscribeTest = bufferTest.subscribe(val => console.log(val));
        //아래와 같이 가능
        //const subscribeTest = bufferTest.map(val => this.mapFunc(val)).subscribe(function (val) {
        //매개변수와 반환 값이 존재합니다.
        // 
        /*


        */
        //위의 표현은 아래와 동일하다.
        const subscribeTest = bufferTest.map(this.mapFunc).map(val => this.mapFunc2(val)).subscribe(function (val) {
            /*
            subscribe 목적은 무엇인가?
            */
            //아래는 불가능하다 어떻게 가능하게 하나 함수 호출은 불가능.?
            //this.test(val);
            //아래는 가능할까? 함수 호출은 불가능.
            //this.lfunc("hello");
            //TypeError: this.lfunc is not a function
            // 아래 형태 가능. 구독을 해서 뭔가 구독된 결과를 변수에 할당 했다. 변수 할당은 가능.
            /*
            this.result = val;
            console.log(this.result);
            */
            outFunc(val);
        });
    }
}
var bt = new BufferTest();
/*
subscribe에서는 외부 함수호출이 안됩니다.
subscribe에서는 this를 사용하면 안되고 subscribe 외부에 선언된 변수에 다음과 같은 방식으로 할당해 줄 수 있습니다.
result = val;
test(val);
console.log(result);

그리고

function test(r) {
    result = r;
    console.log("r : ", r, result);
}

와 같이 하면

test(val);
console.log(result);

이렇게 호출 한다.


*/
// 아래 함수는 전역 변수에 값을 할당할 수 있고 함수도 호출할 수 있다. 클래스로 선언하지 않으면 문제가 없다.
// 여기서 함수가 function 키워드로 선언되어 있음에 유의 반대로, 클래스 내에 선언된 함수는 함수가 아니라 메서드이므로 function 키워드가 존재하지 않는다.
// 따라서, 메서드는 호출될 수 없습니다.
/*

var result;

function test(r) {
    result = r;
    console.log("r : ", r, result);
}

const intervalTest = Rx.Observable.interval(10);
const bufferTest = intervalTest.bufferCount(3);
//const subscribeTest = bufferTest.subscribe(val => this.result = val, console.log(this.val), console.log(this.result))
//const subscribeTest = bufferTest.subscribe(val => console.log(val));
const subscribeTest = bufferTest.subscribe(function (val) {


    test(val);
    console.log(result);
});


*/ 
