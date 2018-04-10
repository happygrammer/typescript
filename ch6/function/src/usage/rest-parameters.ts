/**
 * @author happygrammer
 */
function colors(a: string, ...rest: string[]) {
    return a + " " + rest.join(" ");
}

// colors();
let color1 = colors("red");
let color2 = colors("red", "orange");
let color3 = colors("red", "orange", "yellow");

console.log(`color1=${color1}
color2=${color2}
color3=${color3}`);