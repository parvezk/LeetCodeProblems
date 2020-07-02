/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let HashMap = new Map();
    HashMap.set('I', 1);
    HashMap.set('V', 5);
    HashMap.set('X', 10);
    HashMap.set('L', 50);
    HashMap.set('C', 100);
    HashMap.set('D', 500);
    HashMap.set('M', 1000);
    
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      let currentVal = HashMap.get(s.charAt(i));
      
      if (s.charAt(i) == 'I' && (s.charAt(i + 1) == 'V' || s.charAt(i + 1) == 'X'))
        sum = sum - currentVal;
      else if (s.charAt(i) == "X" && (s.charAt(i + 1) == "L" || s.charAt(i + 1) == "C"))
        sum = sum - currentVal;
      else if (s.charAt(i) == "C" && (s.charAt(i + 1) == "D" || s.charAt(i + 1) == "M"))
        sum = sum - currentVal;
      else
        sum += currentVal;
    }
    return sum;
  };