/**
 * @author happygrammer
 */
function printProfile({ name, nationality = "none" } = { name: "anonymous" }) {
    console.log(name, nationality);
}
printProfile();
printProfile({ name: "happy" }); // nationality는 디폴트 값인 ?가 정해졌으므로 생략 가능
printProfile({ name: "happy", nationality: "korea" });

// printProfile({}); // name은 디폴트 값이 없으므로 생략 불가능
// printProfile({ nationality: "korea" }); // name은 디폴트 값이 없으므로 생략 불가능