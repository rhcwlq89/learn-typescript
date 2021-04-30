// @ts-check

function sum2(a, b) {
    return a + b;
}

30 !== sum2(10, '20'); // 결과 1020

/**
 * @param {number} a 
 * @param {number} b 
 */
function sum3(a, b) {
    return a + b;
}

sum3(10, '20'); // 에러를 못 잡음...ㅠㅠ 