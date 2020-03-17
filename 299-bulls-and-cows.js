/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  
  let map = new Map(), res = '', temp1 = secret, temp2 = guess;
  
  for (let i = 0; i < secret.length; i++)
    map.set(i, 0);
  
  for (let i = 0; i < secret.length; i++) {
    if (secret.charAt(i) == guess.charAt(i)) {
      map.set(i, 1);
      let ind1 = temp1.indexOf(guess.charAt(i));
      let ind2 = temp2.indexOf(guess.charAt(i));
      temp1 = temp1.slice(0, ind1) + temp1.slice(ind1 + 1);
      temp2 = temp2.slice(0, ind2) + temp2.slice(ind2 + 1);
    }
  }
  //console.log(temp1, temp2)
  
   let A = [...map.values()].reduce((acc, n) => acc += n);
  
  let B = 0;
  for (let i = 0; i < temp2.length; i++) {
   if (temp1.includes(temp2.charAt(i))) {
     B++;
     let index = temp1.indexOf(temp2.charAt(i))
     temp1 = temp1.slice(0, index) + temp1.slice(index + 1)
   }
  }
  
  res = A + 'A' + B + 'B';
  return res;
 
  
};

/*
"1807"
"7810"
"1123"
"0111"
"1"
"0"
"11"
"10"
"11"
"11"
"11"
"01"
*/