/**
 * @author happygrammer
 */
const birthMonth = 9;

// const는 블록 스코프가 적용됨
if (true) {
    const birthMonth = 12;
}
console.log(birthMonth);

const profile = {
    name: "happy",
    month: birthMonth,
};

// profile 변수에 대한 재할당은 불가능함
// const profile = "happy";

// 속성에 대한 할당은 가능함
profile.name = "happy2";
profile.month--;

console.log(profile);