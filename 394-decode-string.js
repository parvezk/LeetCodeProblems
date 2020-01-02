/**
 * @param {string} s
 * @return {string}
 */
// Approach 1: using regex
var decodeString = function(s) {
  const regex = /(\d+)\[([a-z]*)\]/gi;

  while (s.includes("["))
    s = s.replace(regex, (match, p1, p2) => p2.repeat(p1));

  return s;
};
