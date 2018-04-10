let myInfo = { name: "wook", country: "korea", alias: "happy" };
let objUser = myInfo;
function getSecureObject(user) {
    return {
        name: user.name,
        country: user.country
    };
}
let objUser2 = getSecureObject(myInfo);
console.log("1번. 인터페이스와 구조가 불일치 : " + JSON.stringify(objUser));
console.log("2번. 인터페이스와 구조가 일치 : " + JSON.stringify(objUser2));
