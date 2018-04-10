/**
 * @author happygrammer
 */
function echoFunction(message, callback) {
    return callback(message);
}
var responseMessage = echoFunction("hello world!", function (message) { return message; });
console.log(responseMessage);
