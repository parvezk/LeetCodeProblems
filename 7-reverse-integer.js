/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x)
    let n = Math.abs(x);
    let result = 0;
    while (n) {
        result = (n % 10) + (result * 10)
        n = Math.trunc(n / 10);
    }
    return (result > 0x7FFFFFFF) ? 0 : (sign < 0) ? -result : result;
};