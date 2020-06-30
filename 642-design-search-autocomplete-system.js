/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class AutocompleteSystem {
    constructor(sentences, times) {
      this.sentences = sentences;
      this.times = times;
      this.links = new Map();
      this.cur_sent = '';
      
      for (let i = 0; i < sentences.length; i++)
        this.links.set(sentences[i], times[i]);
    }
    // Sort by hot-degrees or ASCII order
    sortFn = (s1, s2) => {
      let a = this.links.get(s1), b = this.links.get(s2);
      return a < b ? 1 : a > b ? -1 : s1.localeCompare(s2);
    }
    
    searchPrefix = cur => {
      const filtered = this.sentences.filter(s => s.startsWith(cur)).sort(this.sortFn);
      return (filtered.length > 3) ? filtered.slice(0, 3) : filtered;
    }
    
    input = c => {
      if (c == '#') {
        if (!this.links.has(this.cur_sent)) {
          this.sentences.push(this.cur_sent);
          this.links.set(this.cur_sent, 1)
        } else
            this.links.set(this.cur_sent, this.links.get(this.cur_sent) + 1);
        
        this.cur_sent = '';
        return [];
      } else {
        this.cur_sent += c;
        return this.searchPrefix(this.cur_sent);
      }
    }
  }
  /** 
   * Your AutocompleteSystem object will be instantiated and called as such:
   * var obj = new AutocompleteSystem(sentences, times)
   * var param_1 = obj.input(c)
   */