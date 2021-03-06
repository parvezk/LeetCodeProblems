/**
 * @param {string} s
 * @return {boolean}
 */

// Approach 1
// Using Stack and Hashmap
var isValid = function(s) {
  const stack = [],
        map = new Map([[')', '('], ['}', '{'], [']', '[']]);
  
  for (let i = 0; i < s.length; i++) {
    let elem = s.charAt(i);
    
    if (map.has(elem)) {
      let stackElem = stack.length ? stack.pop() : null;
      
      if (map.get(elem) != stackElem)
        return false;
      
    } else
        stack.push(elem);
  }
  return stack.length == 0;
};

// Approach 2

// Stack Class
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) return null;
    return this.items.pop();
  }
  top() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

const isOpen = s => s == "(" || s == "{" || s == "[";
const isClosed = s => s == ")" || s == "}" || s == "]";

const Matches = (o, c) => {
  return (
    (o == "(" && c == ")") || (o == "{" && c == "}") || (o == "[" && c == "]")
  );
};

const isValid = function(s) {
  let balanced = true;
  let symbol, openSymbol;
  const stack = new Stack();
  const S = s.split("");
  const len = S.length;
  let i = 0;

  while (i < len && balanced) {
    symbol = S[i];
    if (isOpen(symbol)) stack.push(symbol);
    else if (isClosed(symbol)) {
      if (!stack.items.length) balanced = false;
      else {
        openSymbol = stack.top();
        stack.pop();
        balanced = Matches(openSymbol, symbol);
      }
    }
    i++;
  }
  if (stack.items.length) balanced = false;

  return balanced;
};
