/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length == 0 || !nums.includes(val)) return nums.length;

  while (nums.includes(val)) nums.splice(nums.indexOf(val), 1);

  return nums.length;
};

/**
 * @param {string} s
 * @return {string}
 */

const lps_memoization = (s, L, i, j) => {
  if (L[i][j].length > 0) return L[i][j];
  else if (i > j) return "";
  else if (i == j) {
    L[i][j] = s[i];
    return s[i];
  } else {
    let s_aux_1 = "";
    if (L[i + 1][j - 1].length > 0) {
      s_aux_1 = L[i + 1][j - 1];
    } else {
      s_aux_1 = lps_memoization(s, L, i + 1, j - 1);
      L[i + 1][j - 1] = s_aux_1;

      if (s_aux_1.length == j - i - 1 && s[i] == s[j]) {
        L[i][j] = s.substring(i, j + 1);
        console.log(s, s.substring(i, j + 1));
        return L[i][j];
      } else {
        let s_aux_2 = "",
          s_aux_3 = "";

        if (L[i + 1][j].length > 0) {
          s_aux_2 = L[i + 1][j];
        } else {
          s_aux_2 = lps_memoization(s, L, i + 1, j);
          L[i + 1][j] = s_aux_2;
        }

        if (L[i][j - 1].length > 0) {
          s_aux_3 = L[i][j - 1];
        } else {
          s_aux_3 = lps_memoization(s, L, i, j - 1);
          L[i][j - 1] = s_aux_3;
        }

        if (s_aux_2.length > s_aux_3.length) return s_aux_2;
        else return s_aux_3;
      }
    }
  }
};

var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let n = s.length;
  let L = new Array(n).fill(new Array(n).fill(""));
  return lps_memoization(s, L, 0, n - 1);
};
