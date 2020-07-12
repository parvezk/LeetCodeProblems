/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // init data
    let rows = new Array(9).fill(null).map(x => new Map()),
        col = new Array(9). fill(null).map(x => new Map()),
        boxes = new Array(9).fill(null).map(x => new Map());
     
     for (let i = 0; i < 9; i++) {
       for (let j = 0; j < 9; j++) {
         
         let num = board[i][j];
         num = Number.parseInt(num);
         
         // validate the board
         if (!Number.isNaN(num)) {
           let boxIndex = Math.trunc(i / 3 ) * 3 + Math.trunc(j / 3);
           // keep the current cell value
           if (rows[i].get(num)) rows[i].set(num, rows[i].get(num) + 1);
           else rows[i].set(num, 1);
           
           if (col[j].get(num)) col[j].set(num, col[j].get(num) + 1);
           else col[j].set(num, 1);
   
           if (boxes[boxIndex].get(num)) boxes[boxIndex].set(num, boxes[boxIndex].get(num) + 1);
           else boxes[boxIndex].set(num, 1);
           
           // check if this value has been already seen before
           if (rows[i].get(num) > 1 || col[j].get(num) > 1 || boxes[boxIndex].get(num) > 1) 
             return false;
         }
       }
     }
     return true;
   };