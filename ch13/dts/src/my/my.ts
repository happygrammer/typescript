export namespace MyLibrary {

    export function getMaxNumber(array: number[]): number {
        return Math.max.apply(Math, array);
    }

    function getMinNumber(array: number[]): number {
        return Math.min.apply(Math, array);
    }

}

/*
tsc my.ts -d --outDir dts
tsc my.ts --outDir library
*/