/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = new Map();

  words.forEach(word => {
    if (!map.has(word)) map.set(word, 1);
    else map.set(word, map.get(word) + 1);
  });

  const sortFn = (a, b) =>
    a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : a[0] < b[0] ? -1 : 1;
  map = new Map([...map.entries()].sort(sortFn));

  return [...map.keys()].slice(0, k);
};
