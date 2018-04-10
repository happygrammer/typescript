var Rx = require('@reactivex/rxjs');
const $hello = Rx.Observable.create(function (observer) {
    observer.next('a');
    observer.next('b');
});
const subscribeHello = $hello.map(val => val + val).subscribe(val => console.log(val));
/*
두 옵저버블이 선언됐습니다.

observer.next('Hello');
observer.next('World');

그리고 생성된 옵저버블을 구독하기 위해 subscribe 메서드를 이용합니다.
그러면 옵저버블에서 next 메서드를 이용해 구독에 통지한 내용을 다음과 같이 출력합니다.

Hello
World

가 출력됩니다.

*/ 
