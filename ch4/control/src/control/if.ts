/**
 * @author happygrammer
 */
let text: string = "";
let statusActive: number = 0;
let isEnabled: boolean = true;

// 첫번째 if문
if (statusActive || text) {
    console.log("1");
}

// 두번째 if문
if (isEnabled && 2 > 1) {
    console.log("2");
}