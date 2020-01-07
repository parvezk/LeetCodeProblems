/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = Math.sign(x),
    num = Math.abs(x),
    reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }
  return reversed > Math.pow(2, 32) ? 0 : sign < 0 ? -reversed : reversed;
};
