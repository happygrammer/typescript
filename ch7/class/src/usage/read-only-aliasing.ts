/**
 * @author happygrammer
 */
let emotion: { readonly name: string } = { name: "sad" };

function aliasing(pEmotion: { name: string }) {
    pEmotion.name = "happy";
}

console.log(emotion.name); // sad
// emotion.name = "happy"; // 에러
aliasing(emotion);
console.log(emotion.name); // happy