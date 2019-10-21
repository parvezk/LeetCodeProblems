/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = ""; // final output; string type
  let dsum = 0; // carry digit; number type
  let i = a.length - 1,
    j = b.length - 1;

  while (i >= 0 || j >= 0 || dsum == 1) {
    // compute the sum of last digits and carry
    dsum += i >= 0 ? Number.parseInt(a[i]) : 0;
    dsum += j >= 0 ? Number.parseInt(b[j]) : 0;

    // if digit sum is 1 or 3, add 1 to result
    result = (dsum % 2) + result;

    // compute carry
    dsum = Math.trunc(dsum / 2);

    // move to next digits
    i--;
    j--;
  }
  return result;
};
