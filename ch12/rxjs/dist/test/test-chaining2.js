// 전민규님 질문
/*
HTTP를 두개를 체이닝 형식으로 연결하기가 포인트.
HTTP 한개의 요청을 하나의 Observable로 둠.
만약 두개라면 Observable을 두개만듬.
그래서 체이닝으로 연결함 실습해보자.
*/
var Rx = require('@reactivex/rxjs');
class First {
    mapFunc(r) {
        console.log("mapFunc22", r);
        return r.push('h');
    }
    start() {
        const intervalTest = Rx.Observable.interval(10).take(1); //HTTP는 하나의 데이터를 받으므로
        const bufferTest = intervalTest.bufferCount(3);
        const stream = Rx.Observable.of(1, 2, 4, 6, 8);
        const subscribeTest = bufferTest.subscribe(function (val) {
            console.log("first stream : ", val);
            stream.subscribe(function (val) {
                console.log("second stream : ", val);
            });
        });
        // 만약 위 예제에서 Subscrdibe를 생략하면 구독을 하지 않으므로 연산자가 동작하지 않습니다.
        // 따라서 연산자가 동작하기 위해서는 반드시 구독이 되어야 합니다.
    }
}
var first = new First();
first.start();
/*
@dadumvu token:(token: any) => { .. } 내부에서 클래스에 정의된 메서드 호출은 불가능합니다.  왜냐하면 화살표 함수에서 this는 객체 자신을 가르키기 때문입니다. 즉 handler 객체 자신을 가르키기 때문입니다.   그런데 굳이 클래스에 정의된 메서드를 호출 하겠다면 방법은 메서드를 static으로 선언해서  클래스명.메서드명() 과 같은 방식으로 호출 하거나 static은 정상적인 방법이 아니므로 함수내 지역 변수를 선언하고 var myFunc = this.sendToken;을 하고 나서 myFunc(token); 을 호출할 수 도 있는데요. 이 방법도 그렇게 깔끔한 방법 같지는 않습니다. 사실 이렇게 접근 하는 것은 RxJS로 접근하는 것이 아니기 때문에 RxJS로 접근하는 것이 필요해 보입니다. RxJS 방식으로 접근하려면 HTTP 에 대한 옵저버블을 두개를 정의합니다. 그리고 나서, 첫번째 옵저버블의 통지가 이뤄지는 Subscribe 내에서 두번째 옵저버블을  두번째옵저버블.subscribe() 실행합니다.
그런데 이 방법도 세련되지 않았기 때문에

두 옵저버블은 시퀀스 하기 때문에 다음과 같이 합쳐서 실행합니다.

var source1 = Rx.Observable.range(1, 3);
var source2 = Rx.Observable.range(1, 3);

source1.concat(source2)
   .subscribe(function (x) { console.log(x); });


*/
