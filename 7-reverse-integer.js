/**
 * @param {number} x
 * @return {number}
 */

var reverse = x => {
  let res = 0;
  num = Math.abs(x)
  while (num != 0) {
    res = res * 10 + num % 10;
    num = Math.trunc(num / 10);
  }
  if (res > 0x7FFFFFFF) return 0;
  return Math.sign(x) * res;
}

var reverse = x => {
  let result = Number.parseInt(x.toString().split('').reverse().join(''))
  //result = Number(String(Math.abs(x)).split('').reverse().join(''));
  if (result > 0x7FFFFFFF)
    return 0;
  return Math.sign(x) * result;
};