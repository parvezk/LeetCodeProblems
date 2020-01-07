/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sorting one line
var isAnagram = function(s, t) {
  return (
    s
      .split("")
      .sort()
      .join("") ==
    t
      .split("")
      .sort()
      .join("")
  );
};

// Sorting approach
var isAnagram = function(s, t) {
  let s1 = s
      .split("")
      .sort()
      .join(""),
    t1 = t
      .split("")
      .sort()
      .join("");

  return s1 == t1;
};

// Hashmap approach
var isAnagram = function(s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  for (let j = 0; j < t.length; j++) {
    let char = t.charAt(j);
    if (map.has(char)) {
      if (map.get(char) <= 1) map.delete(char);
      else map.set(char, map.get(char) - 1);
    } else {
      map.set(char, 1);
    }
  }

  return map.size <= 0 ? true : false;
};
