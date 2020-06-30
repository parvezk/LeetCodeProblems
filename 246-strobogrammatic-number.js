/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let HT = new Map();
  HT.set('0', '0');
  HT.set('1', '1');
  HT.set('2', '');
  HT.set('3', '');
  HT.set('4', '');
  HT.set('5', '');
  HT.set('6', '9');
  HT.set('7', '')
  HT.set('8', '8');
  HT.set('9', '6');
  
  let res = '';
  for (let i = num.length - 1; i >= 0; i--) {
        let str = HT.get(num.charAt(i))
        res += str;
  }
  return  num == res;
  
};