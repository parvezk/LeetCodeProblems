/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sorting
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;

  let arr1 = s
    .split("")
    .sort()
    .join("");
  let arr2 = t
    .split("")
    .sort()
    .join("");

  return arr1 == arr2 ? true : false;
};

// Hashmap
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
