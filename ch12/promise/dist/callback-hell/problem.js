function getFunc1(text, callback) {
    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        callback(text, true);
    }, 1000);
}
;
function getFunc2(callback) {
    var isSuccess = true;
    var data = { greetings: "hello2" };
    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        callback(isSuccess, data);
    }, 500);
}
;
function getList() {
    var text = "hello1";
    getFunc1(text, function (response, isSuccess) {
        //비동기 응답 결과를 받아 성공적으로 수행 됐으면 다음 진행
        if (isSuccess) {
            console.log(response);
            getFunc2(function (isSuccess, data) {
                if (isSuccess) {
                    //비동기 응답 결과를 받아 반영
                    console.log(data.greetings);
                }
            });
        }
    });
}
;
getList();
