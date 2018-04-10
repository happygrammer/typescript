/**
 * @author happygrammer
 */
let input = 2;

switch (input % 2) {
    case 0:
        console.log("숫자 0"); // fall-throughs 발생
    case 1:
        console.log("숫자 1");
        break;
}