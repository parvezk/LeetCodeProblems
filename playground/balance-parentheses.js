// https://leetcode.com/discuss/interview-question/124551/
// Input: "ab(a(c)fg)9)"
// Output: "ab(a(c)fg)9" or "ab(a(c)fg9)" or "ab(a(cfg)9);

const balanceParan = (s) => {
    let n = s.length
    let txt = '';
    let remove = new Array(n).fill(false);
    
    let open = 0;
    for (let i=0; i<n; ++i) {
      if (s.charAt(i) == '(')
        open++
      else if (s.charAt(i) == ')') {
        if (open > 0)
          open--;
        else
          remove[i] = true;
      } 
    }
    
    let close = 0;
    for (let j=n-1; j>=0; j--) {
      if (s.charAt(j) == ')')
        close++;
      else if (s.charAt(j) == '(') {
        if (close > 0)
          close--;
        else
          remove[j] = true;
      }
    }
    
    for (let k=0; k<n; k++)
      if (!remove[k]) txt += s.charAt(k);
    
    return txt;
  }
  
  (function main() {
    console.log(balanceParan("ab(a(c)fg)9)"))
    //console.log(balanceParan(")a(b)c()("))
    console.log(balanceParan(")("))
    //console.log(balanceParan("a(b))"))
    //console.log(balanceParan("(a(c()b)"))
    console.log(balanceParan("(a)b(c)d(e)f)(g)"))
  }());