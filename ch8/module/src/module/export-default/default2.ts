/**
 * @author happygrammer
 * export { p as default, h as hello }; 선언 후
 * export { p as default }와 같이 한번더 선언하는 것은 불가합니다.
 */
const p = {
    name: "happy",
    age: 30
};
const h: string = "hello ts!";

export { p as default, h as hello };