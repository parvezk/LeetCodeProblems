/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let size = digits.length;
    
    if (((+(digits[size - 1]) + 1) % 10) != 0)
    {
      digits[size - 1] = +digits.pop() + 1;
    }
    else
    {
      digits.pop();
      
      if (!digits.length)
      {
        digits.push('1');
        digits.push('0');
      }
      else
      {
        digits = plusOne(digits);
        digits.push('0')
      }
    }
    return digits;
  };