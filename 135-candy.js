/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let candies = new Array(ratings.length).fill(1),
      flag = true, sum = 0;

  while (flag) {
    flag = false;
    for (let i = 0; i < ratings.length; i++) {
      
      if (i != ratings.length - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1;
        flag = true;
      }
      
      if (i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
        candies[i] = candies[i - 1] + 1;
        flag = true;
      }
    }
  }
  sum = candies.reduce((accum, val) => accum += val);
  return sum;
};

/*
[1,3,4,5,2]
[1,3,2,2,1]
[1,2,87,87,87,2,1]
[1,3,4,5,2]
*/