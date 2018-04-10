/**
 * @author happygrammer
 */
export class MyCar {

    constructor(public name: string) { }

    getName() {
        return this.name;
    }
}
export { Engine as SuperEngine } from "./engine";