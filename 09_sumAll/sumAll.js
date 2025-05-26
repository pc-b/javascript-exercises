const sumAll = function (i, j) {
    let sum = 0;

    if (typeof i !== "number" ||
        typeof j !== "number" ||
        !Number.isInteger(i) ||
        !Number.isInteger(j) ||
        i < 0 ||
        j < 0) {
        return "ERROR";
    }



    for (let from = Math.min(i, j); from <= Math.max(i, j); from++) {
        sum += from;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
