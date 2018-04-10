var Rx = require('@reactivex/rxjs');
class TestComponent {
    func1(v) {
        console.log("로직1\t", v);
        return v;
    }
    func2(v) {
        console.log("로직2\t", v);
        return v;
    }
    func3(v) {
        console.log("로직3\t", v);
        return v;
    }
    func4(v) {
        console.log("로직4\t", v);
        return v;
    }
    pay() {
        const $apple = Rx.Observable.of('사과').delay(100).map(this.func1).mergeMap(val => Rx.Observable.of(`맛있는 ${val}`).map(this.func2));
        const $orange = Rx.Observable.of('오렌지').delay(200).map(this.func3);
        const $banana = Rx.Observable.of('바나나').delay(300).map(this.func4);
        const $fork = Rx.Observable.forkJoin($apple, $orange, $banana);
        $fork.subscribe(val => {
            console.log(val);
        });
    }
}
/*
[실행결과]

로직1    사과
로직2    맛있는 사과
로직3    오렌지
로직4    바나나
[ '맛있는 사과', '오렌지', '바나나' ]
*/
var mmm = new TestComponent();
mmm.pay();
/*

dadumvu님의 질문에 대한 답변을 다시한번 정리해서 다음과 같이 전달드리고자 합니다.

1) map안에 로직을 넣을 수 있습니다. 메서드 호출이 가능합니다. (처리 과정에 필요한 로직)
예 : map(this.func1), map((v)=>{ ... })등 의 표현이 가능함

2) subscribe에 로직을 넣을 수 있습니다. 메서드 호출이 불가능합니다. (최종결과에 대한 로직)
예 : subscribe(this.func1), subscribe((v)=>{ ... }) 등의 표현이 가능

3) map(this.func1) 혹은 map((v)=>this.func1(v))은 동일한 수행을 합니다.
이때 다음과 같이 map 내에서 메서드 호출은 가능합니다.
map((v)=>{
    this.func1(v);
});

그러나 subscribe에서는 메서드 호출이 불가능합니다.
subscribe((v))={
     this.func1(v);
});


동기 옵저버블의 병렬 처리와 옵저버블에 대한 로직 처리

기존 예제는 불명확하고 혼란스러운 점이 있어  새롭게 예제를 작성해 첨부드립니다.  새롭게 작성한 전체 예제 코드는 다음과 같습니다.

[위 코드]


Angular의 HTTP 요청시에는 Rx.Observable.of('오렌지') 대신에 this.http.get('/test/1')와 같은 형식으로 교체해서 사용합니다.

HTTP 요청 하나를 옵저버블로 표현합니다. HTTP 요청을 두개를 병렬로 수행하므로 옵저버블 두개로 만듭니다. 그리고 이때, HTTP는 비동기 상황이므로 비동기 상황을 가장 손쉽게 맵핑하려면 옵저버블을 다음과 같은 방식으로 시퀀스하게 처리되도록 할 수 있습니다.

const $apple = Rx.Observable.of('사과').delay(100).map(this.func1).mergeMap(
val => Rx.Observable.of(`맛있는 ${val}`).map(this.func2)
);

옵저버블과 연결할 목적의 연산자로 MergeMap을 사용했습니다. 따라서 위 코드에서 MergeMap을 이용해 옵저버블과 연결해 주었습니다.
'사과' 입력 데이터를 받아 처리 후 mergeMap내에 시퀀스하게 실행되는 옵저버블을 실행해 사과를 '맛있는 사과'로 만들어줍니다.
이후 로직 처리는 func1에서 수행합니다. 최종적으로 결과를 시퀀스하게 바꾸려면 forkjoin 연산자를 이용해서 옵저버블의 결과 값을 시퀀스하게 얻어옵니다.

const $fork = Rx.Observable.forkJoin(
$apple,$orange,$banana
);


https://www.learnrxjs.io/operators/transformation/mergemap.html


*/
