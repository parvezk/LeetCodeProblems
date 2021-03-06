/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Recursive Solution
var generate = function(numRows) {
  if (numRows.length < 1) return [];
  const triangle = [[1]]; // trivial

  const pascal = n => {
    if (n == 1) return triangle[0];
    else {
      const previous_row = pascal(n - 1),
        row = [1];
      for (let i = 0; i < previous_row.length - 1; i++)
        row.push(previous_row[i] + previous_row[i + 1]);

      row.push(1);
      triangle.push(row);
      return row;
    }
  };
  pascal(numRows);
  return triangle;
};

// ITERATIVE SOLUTION
var generate = function(numRows) {
  const triangle = new Array();

  // first base case: zero rows requested
  if (numRows == 0) return triangle;

  // second base case: first row is always [1]
  triangle[0] = [1];

  for (let i = 1; i < numRows; ++i) {
    //Retain previous row
    const prevRow = triangle[i - 1];
    //create new pascal row
    const sublist = new Array(prevRow.length + 1);

    //first row element is always 1
    sublist[0] = 1;

    //each triangle element [except first and last] is the sum of
    // the above and to-the-left and the above and to-the-right

    for (let j = 1; j < prevRow.length; ++j) {
      if (prevRow[j - 1] && prevRow[j])
        sublist[j] = prevRow[j - 1] + prevRow[j];
    }

    //last row element is always 1
    sublist[sublist.length - 1] = 1;

    triangle.push(sublist);
  }
  //console.log(triangle)
  return triangle;
};
