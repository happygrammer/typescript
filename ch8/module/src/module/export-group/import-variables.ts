/**
 * @author happygrammer
 */
import { ver, author, extensions, display } from "./export-variables";
console.log("Api Name : ", ver);
console.log("Api Version : ", author);
extensions.forEach(s => {
  console.log("extensions : ", s);
});
console.log("display() : ", display());