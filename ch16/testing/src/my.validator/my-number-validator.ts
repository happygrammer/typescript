export namespace My.NumberValidator {
    export function isPhone(input: string) {        
        let regex =  /^01([0|1|6|7|8|9]?)-\d{3,4}-\d{4}$/;
        return regex.test(input);
    }
}