/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let map = new Map();
  
  for (let i = 0; i < ratings.length; i++)
    map.set(i, 1);
  
  for (let i = 0; i < ratings.length; i++) {
    
    if (!Number.isNaN(ratings[i - 1]) && ratings[i] > ratings[i - 1]) {
      //if (map.get(i) < map.get(i - 1))
        map.set(i, map.get(i - 1) + 1);   
    }
  }
  
  for (let i = ratings.length - 1; i >= 0; i--) {
    
    if (!Number.isNaN(ratings[i + 1]) && ratings[i] > ratings[i + 1]) {
      if (map.get(i) - map.get(i + 1) <= 1)
        map.set(i, map.get(i + 1) + 1);
    }
    
  }
  //console.log(map)
  return [...map.values()].reduce((acc, num) => acc += num);
};

/*
[1,3,4,5,2]
[1,3,2,2,1]
[1,2,87,87,87,2,1]
[1,3,4,5,2]
*/