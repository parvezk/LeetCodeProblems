// Greedy
var twoCitySchedCost = function(costs) {
  let totalCost = 0;

  costs.forEach(cost => (totalCost += Math.min(cost[0], cost[1])));

  return totalCost;
};

// Greedy
var twoCitySchedCost = function(costs) {
  // Sort by a gain which company has
  // by sending a person to city A and not to city B
  costs = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let totalCost = 0;
  let n = Math.trunc(costs.length / 2);
  // To optimize the company expenses,
  // send the first n persons to the city A
  // and the others to the city B
  for (let i = 0; i < n; i++) totalCost += costs[i][0] + costs[n + i][1];

  return totalCost;
};
