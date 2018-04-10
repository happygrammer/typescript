/**
 * @author happygrammer
 */
function echoFunction(message: string, callback) {
    return callback(message);
}

let responseMessage = echoFunction("hello world!", message => message);
console.log(responseMessage);