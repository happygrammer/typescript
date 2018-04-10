/**
 * @author happygrammer
 */
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("error!!!");
}

fail();