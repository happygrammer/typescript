/**
 * @author happygrammer
 */
// 공통으로 사용할 콜백 함수 정의
var callbackEcho = function (message) { return message; };
var callbackEchoWithLength = function (message) { return message + "(" + message.length + ")"; };
function echoFunction2(message, callback) {
    return callback(message);
}
var responseEcho = echoFunction2("hello", callbackEcho);
var responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);
console.log(responseEcho);
console.log(responseEchoWithLength);
