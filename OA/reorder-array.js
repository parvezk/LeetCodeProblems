/**
// https://leetcode.com/discuss/interview-question/413734/Bloomberg-or-Re-order-Array-Based-on-Dictionary
 Consider a vector of employees with a name and their title:
[<John, Manager>, <Sally, CTO>, <Sam, CEO>, <Drax, Engineer>, <Bob, CFO>, <Daniel, Engineer>]

And a dictionary where the keys report to the values:
{[CTO, CEO], [Manager, CTO], [Engineer, Manager], [CFO, CEO]}

Re-order the vector of employees according to the dictionary mappings
Sample output:
[<Drax, Engineer>, <Daniel, Engineer>, <John, Manager>, <Sally, CTO>, <Bob, CFO>, <Sam, CEO>]
 */
//https://leetcode.com/problems/reconstruct-itinerary/discuss/437594/super-easy-and-clean-Javascript-(Greedy)-DFS-with-detailed-explanations

/*// first build graph
  graph.set('CEO', ['CTO', 'CFO']);
  graph.set('CFO', []);
  graph.set('CTO', ['Manager']);
  graph.set('Manager', ['Engineer']);
  graph.set('Engineer', []);*/

var findItinerary = function(roles) {
  const graph = new Map(),
    order = [];

  for (let role of roles) {
    let r1 = role[0],
      r2 = role[1];
    if (!graph.has(r2)) graph.set(r2, [r1]);
    else graph.get(r2).push(r1);

    if (!graph.has(r1)) graph.set(r1, []);
  }
  console.log(graph);

  const dfs = node => {
    const list = graph.get(node);
    for (let elem of list) dfs(elem);

    order.push(node);
  };

  dfs("CEO");
  return order;
};

(function main() {
  let arr = [
    ["CTO", "CEO"],
    ["Manager", "CTO"],
    ["Engineer", "Manager"],
    ["CFO", "CEO"]
  ];
  console.log(findItinerary(arr));
})();
