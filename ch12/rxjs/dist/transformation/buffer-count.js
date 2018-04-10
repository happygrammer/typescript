var Rx = require('@reactivex/rxjs');
const myInterval = Rx.Observable.interval(10);
const bufferThree = myInterval.bufferCount(3);
const subscribe = bufferThree.subscribe(val => console.log('Buffered Values:', val));
/*
버퍼 카운트에 대한 예입니다. 버퍼 카운트는 지정된 인터벌 간격으로 버퍼 사이즈 만큼의 숫자를 생성합니다.
예를 들어 bufferCount(3)으로 설정되면 [1,2,3], [4,5,6] .. 과 같은 방식으로 배열 단위의 스트림을 생성합니다.
특히 데이터 스트림 중 Subscribe 메서드 내부로 전달된 매개변수 값 val은 출력이 가능합니다.
무한정 지속 됩니다. 이것을 중단 하려면?
*/ 
