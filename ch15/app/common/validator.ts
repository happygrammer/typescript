export function isURL(url: string) {
    return /^(http|https):\/\/[^ "]+$/.test(url);
}