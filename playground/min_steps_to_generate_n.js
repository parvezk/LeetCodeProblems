// https://leetcode.com/discuss/interview-question/406663/Bloomberg-or-Phone-Screen-or-Min-Steps-to-Generate-Number

const min_steps_to_produce_n = target => {
    let list = [1],
        step = 0;
    
    while (list.length) {
      step++;
      let popLen = list.length;
      
      for (let i = 0; i < popLen; i++) {
        let v = list.shift(),
            m = v * 2,
            d = v / 3;
        if (Math.trunc(m) == target || Math.trunc(d) == target)
          return step;
        
        list.push(m)
        if (d > 1) list.push(d)
      }
    }
    return 0;
  }
  
  (function main() {
    const l = console.log
    l(min_steps_to_produce_n(10)) //6
    l(min_steps_to_produce_n(3))  //7
  }());
  
  /*const min_steps_to_generate_n = target => {
    let num = 1, step = 0;
    let visited = new Set([1]);
    
    while (num != target) {
      step++;
      if (num > target && !visited.has(Math.trunc(num / 3)))
        num = Math.trunc(num / 3);
      else
        num = num * 2;
      
      visited.add(num);
    }
    return step;
  }*/