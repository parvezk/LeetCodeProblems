/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function(tickets) {
  const graph = new Map();
  let order = [];

  // Build Graph
  for (t of tickets) {
    const depart = t[0],
      arrival = t[1];

    if (!graph.has(depart)) graph.set(depart, [arrival]);
    else graph.get(depart).push(arrival);
  }
  //console.log(graph)

  for (const [key, val] of graph.entries()) //
    graph.set(key, val.sort());

  const dfs = node => {
    let list = graph.get(node);
    while (list && list.length > 0) {
      dfs(list.shift());
    }
    order.push(node);
  };

  dfs("JFK");
  return order.reverse();
};
