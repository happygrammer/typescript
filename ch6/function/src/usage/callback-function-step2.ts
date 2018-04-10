/**
 * @author happygrammer
 */

// 공통으로 사용할 콜백 함수 타입의 정의
type EchoCallbackType = (message: string) => void;

// 공통으로 사용할 콜백 함수 정의
let callbackEcho: EchoCallbackType = message => message;
let callbackEchoWithLength: EchoCallbackType = message => `${message}(${message.length})`;

function echoFunction2(message: string, callback) {
    return callback(message);
}

let responseEcho = echoFunction2("hello", callbackEcho);
let responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);

console.log(responseEcho);
console.log(responseEchoWithLength);