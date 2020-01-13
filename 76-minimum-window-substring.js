/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let table = new Map();

  for (c of t) {
    if (table.has(c)) table.set(c, table.get(c) + 1);
    else table.set(c, 1);
  }

  let begin = 0,
    end = 0,
    counter = table.size,
    len = Number.MAX_VALUE;
  let ans = "";

  while (end < s.length) {
    let endchar = s.charAt(end);

    if (table.has(endchar)) {
      table.set(endchar, table.get(endchar) - 1);

      if (table.get(endchar) == 0) counter--;
    }
    end++;

    while (counter == 0) {
      if (end - begin < len) {
        len = end - begin;
        ans = s.substring(begin, end);
      }

      let startchar = s.charAt(begin);
      if (table.has(startchar)) {
        table.set(startchar, table.get(startchar) + 1);
        if (table.get(startchar) > 0) counter++;
      }
      begin++;
    }
  }
  return ans;
};
