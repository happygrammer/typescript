var Rx = require('@reactivex/rxjs');
//옵저버블을 두개 만든다. 그리고 HTTP를 체이닝 하는 경우에 사용할 수 있다.
class Second {
    mapFunc(r) {
        console.log("mapFunc22", r);
        return r.push('h');
    }
    start() {
        //const $Info = Rx.Observable.interval(10).take(1); //두번째 HTTP 가상의 응답 데이터을 생성하여 옵저버블 생성
        /* Happygrammer
           2017-02-07
           Observable merging with concat
        */
        const $numbers = Rx.Observable.of(1000); // 첫번째 HTTP에 대한 가상의 응답 데이터를 생성하여 옵저버블 생성
        const $Info = Rx.Observable.of(2000); //두번째 HTTP 가상의 응답 데이터을 생성하여 옵저버블 생성
        $numbers.subscribe(function (x) {
            console.log("첫번째 처리", x);
        });
        const secondProcessing = $Info.subscribe(function (x) {
            console.log("두번째 처리", x);
        });
        //이렇게 하면 에러난다! 
        //$Info.concat($numbers).flatMap((x) => Rx.Observable.throw(new Error("Error"))).subscribe(
        $Info.concat($numbers).subscribe(x => console.log('next: %s', x), e => console.log('error: %s', e), () => console.log('completed'));
        // 가상의 비동기 HTTP 요청을 시퀀스로 실행
        /*
        [실행결과]
        첫번째 처리 1000
        두번째 처리 2000
        */
        // 만약 위 예제에서 Subscrdibe를 생략하면 구독을 하지 않으므로 연산자가 동작하지 않습니다.
        // 따라서 연산자가 동작하기 위해서는 반드시 구독이 되어야 합니다.
    }
}
var second = new Second();
second.start();
/*
RxJS 옵저버블 연산시 메서드 호출을 통한 로직 처리?

RxJS 로직은 연산자를 이용해서 처리합니다. RxJS에서 활용할 수 있는 연산자는 매우 많습니다. map은 연산자중 하나의 연산자입니다. 연산자가 로직의 역할을 합니다. 아시다시피 map이든 subscribe든 인자로 메서드 이름만 넘기더라도 메서드가 실행될 수 있습니다.

map(sendToken)...

그런데 위 코드를 예로 들면 httpRequestMethod 메서드 내에서 다른 메서드를 호출할 수 없습니다. 이는 map(()=>{ ... }) 내의 스코프가 고립 되어
클래스에 선언된 메서드를 호출할 수 없습니다. 호출하려면 위와 같이 map(sendToken)과 같이 함수 자체를 실행해 주거나, 함수를 static으로 선언해 클래스명.함수명으로 접근해 사용하거나,
메서드 내 지역변수를 하나 선언하고 해당 지역변수에 함수 sendToekn을 할당해서 지역 변수를 통해 우회해서 호출하는 방법이 있고, 그것이 아니라면 외부에 클래스를 두어 메서드를 호출할 수 있습니다.
뭐 어떻게 해서든 호출은 할 수 있게 만들 수는 있습니다. 다만 이러한 방법이 RxJS 방법이 아닌 방법이라는 점입니다.

코드가 하려는 동작은 두 HTTP 요청을 시퀀스한 방법으로 처리하려는 것으로 보입니다.
그런데 코드를 보면 RxJS 방식이 아닌 subscribe 전 map 내에 또다른 비동기 HTTP 요청이 이뤄지고 있습니다. 스코프가 깊어지는 느낌이고, 시퀀스로 처리되지 않고 있습니다. 이 경우에는 RxJS 방식을 사용하면 어떨까요? 올려주신 코드가 하고자 했던 방식을 RxJS 방식으로 하면 다음과 같이 할 수 있습니다.

HTTP 요청에 대한 두 옵저버블을 만들고
구독을 개별적으로 처리하고 나서 병합을 해줍니다.

이해를 돕기 위해 간단한 코드를 작성해 보았습니다.^^

const $numbers = Rx.Observable.of(1000); // 첫번째 HTTP에 대한 가상의 응답 데이터를 생성하여 옵저버블 생성
const $Info = Rx.Observable.of(2000); //두번째 HTTP 가상의 응답 데이터을 생성하여 옵저버블 생성

$numbers.subscribe(function (x) {
console.log("첫번째 처리", x);

});

const secondProcessing = $Info.subscribe(function (x) {
console.log("두번째 처리", x);
});

$Info.concat($numbers).subscribe(
x => console.log('next: %s', x),
e => console.log('error: %s', e),
() => console.log('completed')); // 가상의 비동기 HTTP 요청을 시퀀스로 실행

[실행결과]
첫번째 처리 1000
두번째 처리 2000
next: 2000
next: 1000
completed

제 답변이 보완이 될 수 있는 코멘트가 있다면 다른 분들의 참여도 부탁드립니다.
감사합니다.

------------------

위 코드의 처리를 보면 트랜잭션한 처리를 할 수 있습니다.
다만 HTTP 요청으로 서버의 데이터 상태가 변했다면 데이터에 대해서는 트랜잭션 하지 않는데
데이터 업데이트나 갱신에 따른 트랜잭션이 필요한 경우 단일 HTTP 요청으로 처리를 해야 겠고
그런것이 아니라, GET과 같은 서버 데이터 변경 없다면 여러 HTTP 요청을 트랜잭션화 해서 처리할 수 있습니다.

여기서 에러 핸들링이 필요한데요. 예를 들어서 옵저버블 중 하나의 에러가 있다면 어떻게 될까요?
문제가 있습니다. 따라서 다음과 같이 에러를 처리할 수 있습니다.
https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/error_handling.html


옵저버블에 각 subscribe를 정의해서 각 옵저버블의 상태를 각각 받아서 처리할 수 있지만 한꺼번에 받으려면 다음과 같이 concat후에 최종적으로 subscribe해서 받습니다.

let first = Observable.timer(10,500).map(r => {
  return {source:1,value:r};
}).take(4);
let second = Observable.timer(10,500).map(r => {
  return {source:2,value:r};
}).take(4);
first.concat(second).subscribe(res => this.concatStream.push(res));

이렇게 하면 처리를 정의해 놓고 순서대로 최종적인 결과만을 받을 수 있습니다.



코드를 보니 RxJS 방식을 사용하면서  RxJS 방식이 아닌 기존 메서드 호출 방식으로 동기화를 구성하려는 방향의 코드가 생기는것 같습니다. 즉 콜백지옥이 생기는 현상이 생기는것 같습니다.  map 바깥에 정의된 sendToekn 메서드를 호출을 하지 못하는 것은 화살표 함수 this가 handler를 가르키기 때문입니다.   따라서 위 코드를 개선한다면 옵저버블에 해당하는 HTTP 호출을 두개를 만들어 두고, 두 옵저버블을 concat 하는 방식으로 구성 하면 될것 같습니다. 그러면 첫번째 HTTP 요청이 처음에 들어가고 subscribe로 처리한 다음, 두번째 HTTP 요청이 들어가고 요청 응답이 오면 HTTP 응답을 처리하는 것 입니다.https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/querying.md
*/
