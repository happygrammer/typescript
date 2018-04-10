var Rx = require('@reactivex/rxjs');
function hello2() {
    console.log("hello");
}
class MessageBroker {
    hello() {
        console.log("메시지 브로커 메시지");
    }
}
var globalVal;
// 전민규님 질문에 대한 테스트
class ChainingTest {
    mapFunc(r) {
        console.log("mapFunc22", r);
        return r.push('h');
    }
    static helloStatic(msg) {
        console.log("helloStatic" + msg);
    }
    hello(msg) {
        console.log("hello" + msg);
    }
    start() {
        var helloStart = "startHello";
        var func = this.hello; //클래스 내의 메서드를 할당.
        const intervalTest = Rx.Observable.interval(100);
        const bufferTest = intervalTest.bufferCount(3);
        /*
.map(function(hello){
            console.log("h!!=====>"+hello());

        })
        이와 같이 매개변수ㄹ도 함수를 전달할 수 없음!! 고립 스코프이기 때문에
        */
        const subscribeTest = bufferTest.map(val => {
            //setTimeout도 되나? return 결과를 다음 subscribe에 못넘김
            setTimeout(function () {
                //hello2();  //가능하다. 왜냐하면 클래스 외부에 정의된 function이기 때문에
                /*let mb=new MessageBroker();
                mb.hello();*/ // 가능하다.
                //console.log("test!!");
                //this.hello("hihi"); // 고립 스코프 문제가 생김!
                //(this.hello)("hihi"); //고립 스코프 문제가 생김!
                //console.log(helloStart); //OK 바로 상위 스코프인 메서드 내 변수 스코프 까지 적용
                func("hello"); //이렇게는 가능하네???
                ChainingTest.helloStatic("스태틱");
                bufferTest.map(() => {
                    console.log("hello map! 자신의 스코프라는 것을 증명한다.", helloStart, typeof this, this); //상위 scope에 해당하는 함수
                }).subscribe();
            }, 10);
            //정상적!
            //this.hello("hihi");
            //(this.hello)("hihi");
            //console.log(typeof this, this);//object ChainingTest {}
            //console.log(typeof this.hello, typeof this.hello(), this.hello()); // function undefined undefined 가 출력됨
            /*
                this.hello의 경우, 클래스에 정의된 메서드이고 function 키워드가 없지만 this.hello 라고 이름만 적었을때는
                타입이 위 결과처럼 function으로 사용됩니다. 따라서 전달이 가능합니다.
            */
            //아래와 같이 넘기는 건 됨.
            val = val + "map!";
            return val;
        }).subscribe(function (val) {
            this.result = val;
            console.log(this.result);
            //실행불가
            //this.hello("hihi");
            //(this.hello)("hihi");
            //이때 http 하나의 응답결과를 받고 나서 이어서 하려면 subscribe에 대해 로직을 추가한다.
            //complete(컬렉션이 아니라 하나의 데이터라면 next()에 해당하는 첫번째 매개변수에)에 http 로직을 추가해서 연이어서 일어나도록 함?
        });
        // 만약 위 예제에서 Subscrdibe를 생략하면 구독을 하지 않으므로 연산자가 동작하지 않습니다.
        // 따라서 연산자가 동작하기 위해서는 반드시 구독이 되어야 합니다.
    }
}
var ct = new ChainingTest();
ct.start();
