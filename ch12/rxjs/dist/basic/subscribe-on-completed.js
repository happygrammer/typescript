var Rx = require('@reactivex/rxjs');
class SubscribeTest2 {
    mapFunc(r) {
        console.log("mapFunc22", r);
        return r.push('h');
    }
    complete(r) {
        console.log("complete : ", r);
    }
    nexttt(r) {
        console.log("next : ", r);
    }
    start() {
        const intervalTest = Rx.Observable.interval(10).take(10);
        const bufferTest = intervalTest.bufferCount(3);
        const subscribeTest = bufferTest.map(this.mapFunc).subscribe(x => this.nexttt('Observer got a next value: ' + x), err => console.error('Observer got an error: ' + err), () => this.complete('Observer got a complete notification'));
    }
}
var st2 = new SubscribeTest2();
st2.start();
/*
complete 된 다음에 출력이 이루어집니다. 보다시피 마지막 subscribe에서 함수를 호출했습니다.
다만 화살표 함수 내에서 다른 함수 호출이 안된다. 왜? scope문제인거 같은데.
화살표 함수에서 다른 함수가 호출되는지 테스트 해볼까?


*/
/*
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
위 문서를 보면 화살표 함수가 나와 있습니다. 본래 화살표 함수는 function(){}와 같은 익명 함수를 대체하기 위해 사용합니다.
화살표 함수 표현은 non-method 함수와 잘 어울립니다. 활살표 함수를 메서드로 다뤄보겠습니다.

  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }



*/ 
