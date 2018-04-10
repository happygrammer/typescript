/**
 * @author happygrammer
 */
interface HelloMessage { first: string, second: string; }
function HelloMessage(name: string): HelloMessage {
    let message: HelloMessage = { first: "hello", second: name };
    return message;
}
export default HelloMessage;
