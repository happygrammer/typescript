/*
Subscribe에서 함수 이름을 넘기면 호출이 되고,
익명 함수 내에 함수를 호출하면 호출이 안된다.

콜백 함수에서 외부 함수를 호출해 보자.

*/
var helloWorld = "helloWorld";
class MyTest {
    test() {
        console.log("test 입니다!");
        this.test2();
    }
    test2() {
        console.log("test2!");
    }
    start() {
        this.cGlobal = "test";
        helloWorld = "hello!world! 바뀜"; //글로벌 변수는 바뀔 수 있다.
        var test = "hello!";
        var obj = {
            i: 10,
            b: this.test,
            c: function (test22) {
                console.log(this.i, this, test, this.message, helloWorld, this.cGlobal);
                //여기서 this는 화살표 함수가 아니기 때문에 obj 자체를 가르킵니대ㅏ.
                //따라서 this.message라고 하면 obj 객체 자신을 가르키기 때문에 호출할 수 없습니다.
                //만약 { } 스코프에 영향이 없도록 하려면 글로벌 변수를 클래스 외부에 선언하면 this없이 곧바로 접근해서 출력가능합니다
                //마지막 cGlobal는 클래스 전역에 선언 되어 있지만 this는 현재 객체를 가르키므로 this.cGlobal은 obj 객체내의 cGlobal을 가르킨다.
                //obj에 cGlobal이 선언되어 있지 않으므로 error가 발생함.
                test22();
            }
        };
        //obj.b(); // prints undefined, Window
        obj.c(this.test2); // prints 10, Object {...}
        // 이렇게 function을 전달해서는 실행 가능하다. 이게 어쩌면 map() 이라든지 연산자에서 메서드를 넘기는 원리와 동일하다고 보인다.
        // 그러나 익명 함수 function(){ .. }  내부에서 클래스에 선언된 메서드를 호출 하는 건 안된다. 
        // 왜냐하면, 스코프 문제가 있기 때문인데, 위의 경우 this는 obj 객체를 가르킵니다. ...
        // 객체 내부에서 This로 클래스 선언된 메서드를 호출할 수 없고 외부
        //
    }
}
var m = new MyTest();
m.start();
/*
function test(){
    console.log("test!");
}

var obj = {
  i: 10,
  //b: () => test(),
  b: test, // 이때 화살표 함수 표현은 다음과 같이 이름으로 대체될 수 있다.
  c: function() {
    console.log( this.i, this);
    test();
  }
}
//obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}
*/
/*
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}

의 결과는 다음과 같다.

    undefined {}
10 { i: 10, b: [Function: b], c: [Function: c] }

여기서

b: () => console.log(this.i, this),

를 보면, undefined {}가 되었다.
화살표 함수는 자신의 this를 정의할 수 없다.

반면 화살표 함수가 아닌 다음과 같은 익명 함수의 경우

 c: function() {
    console.log( this.i, this)
  }

this.i, this라고 하면 출력 결과처럼 출력되는데 이는
객체 자신을 가르키기 때문이다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98



*/
