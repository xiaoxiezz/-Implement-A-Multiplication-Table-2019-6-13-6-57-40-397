// createMultiplyTable
function createMultiplyTable(start, end) {
    if (!isValid) {
        return null;
    }
    var multiplyTable = getExpression(start, end);
    // console.log(multiplyTable);
    return multiplyTable;
}
// 是否合法
function isValid(start, end) {
    if (!isNumber(start, end)) {
        return null
    } else if (!isInteger(start, end)) {
        return null
    } else if (!isRangeNumber(start) || !isRangeNumber(end)) {
        return null;
    } else {
        return true;
    }
}

//是否为数字
function isNumber(start, end) {
    if (typeof (start) == 'number' && typeof (end) == 'number') {
        return true;
    } else {
        return false;
    }
}
// 是否为整数
function isInteger(start, end) {
    if ((start % 1 === 0) && (end % 1 === 0)) {
        return true;
    } else {
        return false;
    }
}
// 是否在范围内
function isRangeNumber(number) {
    if (number >= 1 && number <= 1000) {
        return true;
    }
    return false;
}
//乘法计算
// function multiplyCalculation(start, end) {
//     var result = [];
//     for (let i = start; i <= end; i++) {
//         for (let j = start; j <= i; j++) {
//             result += j + "*" + i + "=" + i * j;
//             if (i !== j) {
//                 result += " ";
//             }
//         }
//         result += "\r\n";
//     }
//     // console.log(result);
//     return result;
// }

function getExpression(start, end) {
    let result='';
    const separate = end === start ? '' : '\n';
    for (let index = start; index <= end; index++) {
        return result += getLine(start, index);
    }

}
function getLine(start, end) {
    let result='';
    const separate = start === end ? '' : '\t';
    for (let i = start; i <= end; i++) {
        return result += getItem(start, i);
    }
    
}
function getItem(first, second) {
    return `${first}*${second}=${first * second}`;
}


createMultiplyTable(2, 4);

// module.exports = createMultiplyTable;
