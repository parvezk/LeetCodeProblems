/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    if (num == '0' || num == '1' || num == '8') return true;
    if (num.length <= 1) return false
    let map = new Map();
    map.set('1', '1')
    map.set('2', '')
    map.set('3', '')
    map.set('4', '')
    map.set('5', '')
    map.set('6', '9')
    map.set('7', '')
    map.set('8', '8')
    map.set('9', '6')
    map.set('0', '0')
    
    let ans = '',
        len = num.length;
    for (let i = len - 1; i >= 0; i--) {
      let str = num.charAt(i)
      
      ans += map.get(str);
    }
    console.log(ans)
    return ans == num;
  };