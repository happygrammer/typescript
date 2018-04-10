/**
 * @author happygrammer
 */
const basicRejectPromise = new Promise((resolve, reject) => {
    // reject를 통해 예외 상황을 발생 시킴
    reject("Error!");
}).catch((err) => {
    // 예외 상황 처리
    console.log(err);
});