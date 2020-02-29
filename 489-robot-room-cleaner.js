/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  
  let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]],
      visited = new Set();
  
  const goBack = () => {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
  
  const backtrack = (row, col, d) => {
    
    if (!visited.has(JSON.stringify([row, col]))) {
      visited.add(JSON.stringify([row, col]), 0);
      robot.clean();
    
      for (let i = 0; i < 4; i++) {
        let newD = (d + i) % 4,
            newRow = row + directions[newD][0],
            newCol = col + directions[newD][1];

        if (!visited.has(JSON.stringify([newRow, newCol])) && robot.move()) {
          backtrack(newRow, newCol, newD);
          goBack();
        }

        robot.turnRight();
      }
    }
  }
  
  backtrack(0, 0, 0);
};