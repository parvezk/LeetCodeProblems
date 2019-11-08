// Solution 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let i = 0; j = x.length - 1;
    while (i < x.length / 2)
        {
            if (x[i] != x[j]) return false;
            i++;
            j--;
        }
    return true;
};

// Solution 2
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //console.log(x.slice(1, x.length-1))
    x = x.toString();
    let n = x.length;
    if (n <= 1)
        return true;
    else
        return (x[0] == x[n-1]) && isPalindrome(x.slice(1, n-1));
};