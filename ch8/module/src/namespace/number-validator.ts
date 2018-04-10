/**
 * @author happygrammer
 */
namespace Validator {
    export class NumberValidator {
        isNumeric(s: any): boolean {
            if (typeof s === "number" || s instanceof Number) {
                return true;
            } else {
                return false;
            }
        }
    }
}