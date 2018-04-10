var Rx = require('@reactivex/rxjs');
var observer = Rx.observer.create(x => console.log(x), e => console.log(e), () => console.log('onCompleted'));
const myInterval2 = Rx.Observable.interval(10);
const bufferThree2 = myInterval2.bufferCount(3);
const subscribe2 = bufferThree2.subscribe(observer);
/*
버퍼 카운트에 대한 예입니다. 버퍼 카운트는 지정된 인터벌 간격으로 버퍼 사이즈 만큼의 숫자를 생성합니다.
예를 들어 bufferCount(3)으로 설정되면 [1,2,3], [4,5,6] .. 과 같은 방식으로 배열 단위의 스트림을 생성합니다.
*/
