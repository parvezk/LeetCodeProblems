/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  if (numRows < 1) return [];
  const triangle = [[1]];

  const pascal = n => {
    if (n == 1) return [1];
    else {
      const previous_row = pascal(n - 1);

      const row = [1];
      for (let i = 0; i < previous_row.length - 1; ++i)
        row.push(previous_row[i] + previous_row[i + 1]);
      row.push(1);

      triangle.push(row);
      return row;
    }
  };
  pascal(numRows);
  return triangle;
};
