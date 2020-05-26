/**
 * @param {number} n
 * @return {number}
 */
// DP Memoization
var climbStairs = function(n) {
    // Memoization Approach [TOP-DOWN DP]
    const memo = new Map();
    
    const climbing = (i, n) => {
        // Base case
        if (i > n) return 0;
        
        if (i == n) return 1;
        
        if (memo.get(i) > 0)
          return memo.get(i)
      
        // Recursive case
        memo.set(i, climbing(i + 1, n) + climbing(i + 2, n))
        return memo.get(i);
    }
    return climbing(0, n);
  };
  
  
  /*public class Solution {
      public int climbStairs(int n) {
          int memo[] = new int[n + 1];
          return climb_Stairs(0, n, memo);
      }
      public int climb_Stairs(int i, int n, int memo[]) {
          if (i > n) {
              return 0;
          }
          if (i == n) {
              return 1;
          }
          if (memo[i] > 0) {
              return memo[i];
          }
          memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
          return memo[i];
      }
  }*/