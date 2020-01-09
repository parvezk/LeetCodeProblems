/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// TODO
// Using Stack
var backspaceCompare = function(S, T) {};

// Using Ad-hoc approach
var backspaceCompare = function(S, T) {
  let s = S.split("");
  let t = T.split("");

  while (s.includes("#")) {
    if (s.indexOf("#") == 0) s.splice(s.indexOf("#"), 1);
    else s.splice(s.indexOf("#") - 1, 2);
  }

  while (t.includes("#")) {
    if (t.indexOf("#") == 0) t.splice(t.indexOf("#"), 1);
    else t.splice(t.indexOf("#") - 1, 2);
  }
  //console.log(s, t)
  return s.join("") == t.join("");
};

/*
  "ab#c"
  "ad#c"
  "ab##"
  "c#d#"
  "a##c"
  "#a#c"
  "a#c"
  "b"
  */
