/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
class RLE {
    constructor(S) {
      this.key = '';
      this.counts = [];
      
      let sb = '', ca = S.split(''),
          N = ca.length, prev = -1;
      
      for (let i = 0; i < N; i++) {
        if (i == N-1 || ca[i] != ca[i+1]) {
          sb += ca[i]
          this.counts.push(i - prev);
          prev = i;
        }
      }
      
      this.key = sb;
    }
  }
  
  var expressiveWords = function(S, words) {
    
    const R = new RLE(S);
      let ans = 0;
    
      for (let word of words) {
        const R2 = new RLE(word);
        if (R.key != R2.key) continue;
        let continueNext = false;
        
        for (let i = 0; i < R.counts.length; ++i) {
          let c1 = R.counts[i],
              c2 = R2.counts[i];
          
          if (c1 < 3 && c1 != c2 || c1 < c2)
            continueNext = true;
        }
        if (continueNext) continue;
        ans++;
      }
    
    return ans;
  };

  // old solution
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
/*
"heeellooo"
["hello", "hi", "helo"]
"zzzzzyyyyy"
["zzyy","zy","zyy"]
*/
var expressiveWords = function(S, words) {
    let N = S.length;
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let pt1 = 0, pt2 = 0;
      
      while (pt1 < N) {
        
        if (S.charAt(pt1) == word.charAt(pt2)) {
          
          if (S.charAt(pt1) == S.charAt(pt1 + 1)) {
            let c = S.charAt(pt1)
            let len = 0;
            
            while (S.charAt(pt1) == c) {
              len++
              pt1++
            }
            
            if (word.charAt(pt2) == word.charAt(pt2 + 1)) {
              let d = word.charAt(pt2)
              
              while (word.charAt(pt2) == d) {
                len--;
                pt2++;
              }
              
              if (len > 0) {
                word = word.slice(0, pt2) + c.repeat(len) + word.slice(pt2);
                pt2 = pt2 + len;
              }
              
            } else {
              
              if (len >= 3) {
                word = word.slice(0, pt2) + c.repeat(len - 1) + word.slice(pt2)
                pt2 = pt2 + (len);
              }
            }
            
            //console.log(c, len, pt1, pt2, word)
          } else {
            pt1++;
            pt2++;
          }
        } else
            break;
      }
      console.log('word ', word, 'ptrs: ', pt1, pt2)
      if (word == S) count++;
    }
    return count;
  };
