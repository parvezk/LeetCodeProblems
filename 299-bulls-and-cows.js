/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const HT = new Map();
  let A = 0, B = 0;
  // Check Bulls
  for (let i = 0; i < secret.length; i++) {
    let c1 = secret.charAt(i), c2 = guess.charAt(i);
    
    if (c1 == c2)
      A++
    else {
      if (HT.has(c1)) 
        HT.set(c1, HT.get(c1) + 1);
      else 
        HT.set(c1, 1);
    }
  }
  // Check Cows
  for (let i = 0; i < guess.length; i++) {
    let c1 = secret.charAt(i), c2 = guess.charAt(i);
    
    if (c1 != c2) {
      if (HT.has(c2)) {
        B++;
        if (HT.get(c2) == 1) 
          HT.delete(c2)
        else 
          HT.set(c2, HT.get(c2) - 1);
      }
    }
  }
  return A + 'A' + B + 'B';
};