// Solution 1

/**
 * @param {number} x
 * @return {boolean}
 */
// NO CONVERSION TO STRING SOLUTION NEEDED

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;

  let num = x;
  let reverseNum = 0;
  while (num > 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }

  return x == reverseNum || x == Math.trunc(reverseNum / 10);
};
