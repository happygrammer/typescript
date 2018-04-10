export namespace My.StringValidator {
    export function isURL(url: string) {
        return /^(http|https):\/\/[^ "]+$/.test(url);
    }
}