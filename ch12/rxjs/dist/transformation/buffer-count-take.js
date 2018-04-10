var Rx = require('@reactivex/rxjs');
const stopInterval = Rx.Observable.interval(10).take(5);
const stopBuffer = stopInterval.bufferCount(3);
const stopSubscribe = stopBuffer.subscribe(val => console.log('Buffered Values:', val));
const exampleOne = stopInterval.count();
//output: 'Count from Example One: 3'
const subscribeCount = exampleOne.subscribe(val => console.log(`Count from Example One: ${val}`));
/*
take를 이용하면 take에 넘겨진 값의 순서가 되면 스트림이 중단됩니다.
이때 subscribe 옵저버블에 새로운 구독을 추가해 보겠습니다.
구독할 내용은 스트림 변수로 출력된 값의 개수(count) 입니다.
옵저버블 변수에 구독을 위한 subscribe 메서드를 추가합니다.
그러면 구독 결과를 확인할 수 있습니다.
*/
