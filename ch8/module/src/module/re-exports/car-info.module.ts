/**
 * @author happygrammer
 */
import { MyCar as SuperCar, SuperEngine } from "./my-car";

export namespace CarInfo{
    export let car = SuperCar;
    export let engine = SuperEngine;

    export function Hello(){
        console.log("hello");
    }
}