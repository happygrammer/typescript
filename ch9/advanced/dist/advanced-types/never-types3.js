function error(message) {
    throw new Error(message);
}
function fail() {
    return error("error!!!");
}
fail();
