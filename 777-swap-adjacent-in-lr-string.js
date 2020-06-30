/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */

var canTransform = function(start, end) {
  let s = start.replace(/X/g, ''), e = end.replace(/X/g, '');
  if (s != e) return false;
  
   let t = 0;
    for (let i = 0; i < start.length; ++i) {
      if (start.charAt(i) == 'L') {
          while (end.charAt(t) != 'L') t++;
          if (i < t++) return false;
      }
    }

    t = 0;
    for (let i = 0; i < start.length; ++i) {
      if (start.charAt(i) == 'R') {
            while (end.charAt(t) != 'R') t++;
            if (i > t++) return false;
        }
    }

    return true;
};

// Two pointers
var canTransform = function(start, end) {
  const N = start.length,
        S = start.split(''), T = end.split('');
  let i = -1, j = -1;
  
  while (i++ < N && j++ < N) {
    
    while (i < N && S[i] == 'X') i++;
    while (j < N && T[j] == 'X') j++;
    // At this point, i == N or S[i] != 'X',
    // and j == N or T[i] != 'X'.
    // i and j are the indices representing the next
    // occurences of the non-X characters in S and T.
    
    // If only one one of i < N and j < N satisfy,
    // then it isn't solid. there's people [LR] in one of the strings
    if ((i < N) ^ (j < N)) return false;
    
    if (i < N && j < N) {
      // if the person isn't the same, it isn't solid
      // Or, if the person moves backwards, it isn't accessible
      if (S[i] != T[j] || (S[i] == 'L' && i < j) || (S[i] == 'R' && i > j))
        return false;
    }
  }
  return true;
};
