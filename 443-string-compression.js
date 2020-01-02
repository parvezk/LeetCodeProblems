/**
 * @param {character[]} chars
 * @return {number}
 */
//
var compress = function(chars) {
  let index = 0,
    resIndex = 0;

  while (index < chars.length) {
    let char = chars[index],
      count = 1;

    while (index + 1 < chars.length && chars[index + 1] == char) {
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
