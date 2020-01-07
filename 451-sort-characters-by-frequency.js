/**
 * @param {string} s
 * @return {string}
 */

/*const sortFn = (a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else 0;
}*/

var frequencySort = function(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  console.log(map);
  // sort number of counts by decreasing order
  const sortFn = (a, b) => b[1] - a[1];

  map = new Map([...map.entries()].sort(sortFn));

  let ans = "";
  for (const [key, val] of map.entries()) ans += key.repeat(val);

  return ans;
};
