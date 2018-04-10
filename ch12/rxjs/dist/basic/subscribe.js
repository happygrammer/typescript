var Rx = require('@reactivex/rxjs');
class SubscribeTest {
    mapFunc(r) {
        console.log("mapFunc22", r);
        return r.push('h');
    }
    start() {
        const intervalTest = Rx.Observable.interval(10);
        const bufferTest = intervalTest.bufferCount(3);
        /*const subscribeTest = bufferTest.map(this.mapFunc).subscribe(function (val) {
            console.log(val);
        });*/
        const subscribeTest = bufferTest.map(this.mapFunc).subscribe(function (val) {
            this.result = val + "hello";
            console.log(this.result);
        });
        // 만약 위 예제에서 Subscrdibe를 생략하면 구독을 하지 않으므로 연산자가 동작하지 않습니다.
        // 따라서 연산자가 동작하기 위해서는 반드시 구독이 되어야 합니다.
    }
}
var st = new SubscribeTest();
st.start();
/*

http://reactivex.io/rxjs/manual/overview.html
RxJS는 이터레이터 패턴을 옵저버 패턴에 녹여내어 만든 시퀀스 이벤트를 다루는 기능을 제공합니다.
다음과 같은 방식으로 관리합니다.

Observable: represents the idea of an invokable collection of future values or events.
Observer: 데이터 스트림을 생성하는 하나의 단위이다.
Subscription: 옵저버블을 실행하며, 실행을 중단하는데에 사용될 수 있다.
Operators: 순수한 함수이며, 함수 프로그래밍 스타일을 지원한다. map, filter, concat, flatMap, etc 연산자를 이용해 컬렉션을 다룰 수 있다.
Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

구독(subscription)은 옵저버블을 실행하는 개체입니다.

observable.subscribe(observer);

이렇게 옵저버를 실행할 수 있습니다.
옵저버블은

var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

다음과 같은 방식으로 만들수 있습니다.
이런것이 아니면, 매개변수로 바로 전달해서 만들 수 있습니다. 보다시피 옵저버는 세개의 콜백으로 이뤄진 객체입니다.
세 종류의 콜백은 유형별로 나뉘어져 있는데, next는 입력 스트림에 주어진 하나의 입력에 대한 연산이 모두 처리되면 호출 되는 알림이며
error는 옵저버에 문제가 생겼을때의 알림이며
complete는 옵저버가 모두 처리됐을때의 알림입니다.
complete는 생략이 가능합니다.

var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
};

그리고 첫번째 인자로 next 핸들러를 사용하는데, 다음과 같이 임의의 인자를 전달할 수 있습니다.

observable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);


var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();

(이때 알림중 next는 처리가 덜 된 상태이기 때문에 complete에서 처리를 합니다.??????) <- 검증 필요

예를 들어 위에서 subscription 변수가 구독 객체이며 subscrdiption.unsubscribe()와 같은 방식으로 취소할 수 있습니다.
이렇게 구독 상태를 취소해서 버릴 수(disposable) 할 수 있기 때문에 Subscription은 Disposable이라고도 했습니다.
(disposable)합니다. 왜냐하면 하나의 데이터를 구독하고, 지나간 데이터를 되돌려서 재구독하지 않기 때문입니다.(?!)





subscribe는 옵저버블이나 옵저버블 시퀀스를 구독하는 메서드입니다. 변화가 생길때 마다 통지를 받습니다.
subscribe 연산자는 이름이 연산자이기는 하나, 옵저버블에서 전달 받은 완료된 값을 받습니다. 이때 통지 받는 과정에서
에러가 날 수 도 있고
정상적으로 통지받을 수 도 있습니다. 따라서
subscribe 연산자의 함수 구성은 다음과 같이 되는 것 입니다.


var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

http://reactivex.io/documentation/operators.html
보면 카테고리가 나뉘어져 있음




여기서 통지를 받는 내용은 최종적으로 연산자(operator)에 의해 처리가 완료된 결과를 전달 받습니다.
연산 로직은 subscribe로 구독되기 전 연산자에 의해 연산 로직을 처리합니다.
출력 데이터가 리스트 컬렉션이고 리스트 컬렉션에 1씩을 더해야 한다면 이러한 연산을 구독 단계에서 수행하는 것이 아닌, 연산자에서 처리가 되어야 합니다.

<subscribe는 연산 결과에 의해 얻은 최종 결과를 통지 받고, 통지 받은 데이터에 따라 작동합니다.>
subscribe에서는 메서드를 호출할 수 없으며 할당 기능만 가능합니다. 왜냐하면
subscribe는 최종적인 연산 결과(로직 처리 결과)에 대한 결정만을 수행하기 때문입니다.
subscribe는 스트림 데이터(혹은 단일 데이터)를 구독하여 전달 받은 값을 출력하거나 최종적으로 결정하기 위한 정도의 로직을 추가합니다.
따라서 subscribe에서 메서드 호출은 부적하며 이러한 메서드에 해당하는 모든 연산은 연산자에서 수행되도록 해야 합니다.

angular로 응용해 보면 subscribe에 메서드를 호출하려 했던 메서드는 연산자에서 처리하도록 리팩토링 하고
라우팅과 같은 구독 후 최종적으로 받은 값에 대한 출력이나 결정 사항은 subscribe에서 처리되도록 하면 될 것 으로 생각됩니다.

----
콜드 옵저버블 : 콜드 옵저버블은 옵저버블 데이터를 단지 구독만 할 뿐, 구독 할 때까지 항목을 방출(emit) 하지 않습니다.
핫 옵저버블 : 핫 옵저버블이 되려면 구독 하기 전까지 항목(item)을 방출해야 합니다. 항목이 방출되면 구독자는 항목을 관찰할 수 있게 됩니다.


onNext()는 disposable하고 데이터를 읽고 끝
onCompleted()는 모든 데이터 스트림이 끝나면 처리. onCompleted가 ㅁ찹는듯.

onNext()는 값을 데이터 스트림에 전달합니다. 이 메서드는 항목이 방출되는 시점에 이 메서드가 호출 됩니다. 옵저버블에서 사용할 데이터를 매개 변수로 전달 받아 사용합니다.


....다음과 같음

onError()

..

onCompleted()

 observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    
    가능. 이러한 것은 불가

  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next(4); // Is not delivered because it would violate the contract

)


http://reactivex.io/documentation/operators/subscribe.html
*/ 
