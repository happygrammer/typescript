let emotion = { name: "sad" };
function aliasing(pEmotion) {
    pEmotion.name = "happy";
}
console.log(emotion.name);
aliasing(emotion);
console.log(emotion.name);
