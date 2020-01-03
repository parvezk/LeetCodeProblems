/**
 * @param {character[]} chars
 * @return {number}
 */
// Approach 1
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length == 1) return chars.length;

  let resIndex = 0,
    index = 0,
    count = 0;

  for (let index = 0; index < chars.length; index++) {
    let char = chars[index];
    let count = 1;

    while (char == chars[index + 1]) {
      index++;
      count++;
    }
    chars[resIndex++] = char;
    if (count == 1) continue;

    for (let c of "" + count + "") chars[resIndex++] = c;
  }
  chars.length = resIndex;
  return chars.length;
};

// Approach 1 modified
var compress = function(chars) {
  if (chars.length == 1) return chars.length;

  let resIndex = 0,
    index = 0,
    count = 0;

  while (index < chars.length) {
    let char = chars[index];
    let count = 1;

    while (char == chars[index + 1]) {
      index++;
      count++;
    }
    chars[resIndex++] = char;
    index++;
    if (count == 1) continue;

    for (let c of "" + count + "") chars[resIndex++] = c;
  }
  chars.length = resIndex;
  return chars.length;
};

// Read and Write Heads
var compress = function(chars) {
  let anchor = 0,
    write = 0;

  for (let read = 0; read < chars.length; read++) {
    if (chars[read + 1] != chars[read] || read + 1 == chars.length) {
      chars[write++] = chars[anchor];
      if (read > anchor) {
        value = "" + (read - anchor + 1);
        value = value.split("");

        for (let c of value) {
          chars[write++] = c;
        }
      }
      anchor = read + 1;
    }
  }
  return write;
};
