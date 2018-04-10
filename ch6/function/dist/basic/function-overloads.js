/**
 * @author happygrammer
 */
// 월별 별자리 정보
var constellations = [
    { name: "Capricorn", month: 1 }, { name: "Aquarius", month: 2 }, { name: "Pisces", month: 3 },
    { name: "Aries", month: 4 }, { name: "Taurus", month: 5 }, { name: "Gemini", month: 6 },
    { name: "Cancer", month: 7 }, { name: "Leo", month: 8 }, { name: "Virgo", month: 9 },
    { name: "Libra", month: 10 }, { name: "Scorpio", month: 11 }, { name: "Sagittarius", month: 12 }
];
function pick(x) {
    if (typeof x === "object") {
        if (x.month === undefined && x.name !== undefined) {
            for (var _i = 0, constellations_1 = constellations; _i < constellations_1.length; _i++) {
                var constellation = constellations_1[_i];
                if (x.name === constellation.name) {
                    return constellation.month;
                }
            }
            return -1;
        }
        else if (x.month !== undefined && x.name === undefined) {
            if (x.month < 1 || x.month > 12) {
                return -1;
            }
            else {
                return constellations[x.month - 1].name;
            }
        }
        else {
            return -1;
        }
    }
    else if (typeof x === "number") {
        if (x > 0 && x < 13) {
            return x - 1;
        }
        else {
            return -1;
        }
    }
    else {
        return -1;
    }
}
console.log(pick({ month: 0 })); // -1
console.log(pick({ month: 5 })); // Taurus
console.log(pick({ name: "Taurus" })); // 5
console.log(constellations[pick(5)]); // { name: 'Taurus', month: 5 }
