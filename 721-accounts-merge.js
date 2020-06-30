/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const em_to_name = {},
    graph = new Map();

for (let acc of accounts) {
  let name = acc[0];
  for (let email of acc.slice(1)) {
    
    if (graph.has(acc[1])) graph.get(acc[1]).add(email);
    else graph.set(acc[1], new Set([email]));
    
    if (graph.has(email)) graph.get(email).add(acc[1]);
    else graph.set(email, new Set([acc[1]]));
    
    em_to_name[email] = name;
  }
}
//console.log(em_to_name, graph)
let seen = new Set(), ans = [];

for (let email of graph.keys()) {
  if (!seen.has(email)) {
    seen.add(email);
    let stack = [email], component = [];
    
    while (stack.length) {
      let node = stack.pop();
      component.push(node);
      
      for (let nei of graph.get(node)) {
        if (!seen.has(nei)) {
          seen.add(nei);
          stack.push(nei);
        }
      }
    } 
    ans.push([em_to_name[email], ...component.sort()])
  }
}
return ans;
};