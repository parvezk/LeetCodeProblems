/**
 * @param {string} s
 * @return {string}
 */

/*// pseudocode to check if string is balanced
function is_balanced_parentheses(string)
    balance = 0
    for each char in the string
        if char == "("
            balance = balance + 1
        if char == ")"
            balance = balance - 1
        if balance < 0
            return false
    return balance == 0 */

var minRemoveToMakeValid = function(s) {
  let stack = [],
    indexesToRemove = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") stack.push(i);
    else if (s.charAt(i) == ")") {
      if (stack.length == 0) indexesToRemove.add(i);
      else stack.pop();
    }
  }
  // Put any indexes remaining on stack into the set.
  while (stack.length) indexesToRemove.add(stack.pop());

  let sb = "";
  for (let i = 0; i < s.length; i++) {
    if (!indexesToRemove.has(i)) sb += s[i];
  }

  return sb;
};
