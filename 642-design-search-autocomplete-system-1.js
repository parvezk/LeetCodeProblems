/**
 * @param {string[]} sentences
 * @param {number[]} times
 */

class AutocompleteSystem {
    constructor(sentences, times) {
      this.list = sentences;
      this.times = times;
      this.links = new Map();
      this.inputs = '';
      
      for (let i = 0; i < sentences.length; i++) {
        this.links.set(sentences[i], times[i])
      }
    }
    
    searchPrefix = (ch) => {
      
      const sortASCII = (a, b) => {
        //console.log('asci', a, b)
        let ia = false, ib = false;
        
        if (a.length < b.length) ia = true;
        if (a.length > b.length) ib = true;
        
        let i = 1;
        while (a.charCodeAt(i) == b.charCodeAt(i)) {
          i++;
        }
        if (Number.isNaN(a.charCodeAt(i)) && ia) return -1;
        if (Number.isNaN(a.charCodeAt(i)) && ib) return 1
        
        if (Number.isNaN(b.charCodeAt(i)) && ia) return -1
        if (Number.isNaN(b.charCodeAt(i)) && ib) return 1
          
        if (a.charCodeAt(i) > b.charCodeAt(i)) return 1;
        else return -1;
      }
      
      const sortFn = (s1, s2) => {
        let a = this.links.get(s1), b = this.links.get(s2);
        // Sort by hot-degrees
        if (a < b) return 1;
        else if (a > b) return -1;
        else if (a == b) return sortASCII(s1, s2);
      }
     
      let list = this.list.filter(link => link.startsWith(ch));
      
      list = list.sort(sortFn);
      //if (list.length > 1) console.log('sorted', list)
      
      if (list.length > 3)
        list = list.slice(0, 3)
      
      return list;
    }
  /** 
   * @param {character} c
   * @return {string[]}
   */
    input = (c) => {
      
      if (c != '#') this.inputs += c;
    
      const res = this.searchPrefix(this.inputs);
      
      if (c == '#') {
        if (!this.links.has(this.inputs)) {
          this.list.push(this.inputs);
          this.links.set(this.inputs, 1);
          
        } else {
          this.links.set(this.inputs, this.links.get(this.inputs) + 1);
        }
        this.inputs = '';
        return [];
      }
      
      return res;
    }
  }
  
  /** 
   * Your AutocompleteSystem object will be instantiated and called as such:
   * var obj = new AutocompleteSystem(sentences, times)
   * var param_1 = obj.input(c)
   */