/**
 * @param {string} time
 * @return {string}
 */

const format = d => {
  const z = "0",
    s = d.toString();
  return s.length == 2 ? s : s.length == 1 ? z.repeat(1) + s : z.repeat(2) + s;
};
// Modified and cleaner approach
var nextClosestTime = function(time) {
  var arr = time.split("");
  arr = arr.filter(t => !Number.isNaN(Number.parseInt(t)));
  let set = new Set(arr);
  time = arr.join("");
  let hr,
    min,
    newTime,
    found = false;

  while (!found) {
    hr = Number.parseInt(time.slice(0, 2));
    min = Number.parseInt(time.slice(2));

    min = min + 1;

    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }

    if (hr > 24) {
      hr = 0;
      min = 0;
    }

    newTime = (format(hr) + format(min)).split("");
    found = newTime.every(t => set.has(t));
    time = newTime.join("");
  }

  newTime.splice(2, 0, ":");
  return newTime.join("");
};

// First approach
