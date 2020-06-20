/**
 * Initialize your data structure here.
 */
class TrieNode {
    constructor() {
      // R links to Node Characters
      this.R = 26;
      this.end = false;
      this.links = new Map();
    }
    
    containsKey = (ch) => this.links.get(ch) != null;
    
    get = (ch) => this.links.get(ch);
    
    put = (ch, node) => this.links.set(ch, node)
    
    isEnd = () => this.end;
    
    setEnd = () => this.end = true;
  }
  
  
  class Trie {
    
    constructor() {
      this.root = new TrieNode();
    }
   /**
    * Inserts a word into the trie. 
    * @param {string} word
    * @return {void}
    */
    insert (word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);
        if (!node.containsKey(c))
          node.put(c, new TrieNode());
        node = node.get(c);
      }
      node.setEnd();
    }
    
    searchPrefix(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);
        if (node.containsKey(c))
          node = node.get(c);
        else
          return null;
      }
      return node;
    }
    
    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
      let node = this.searchPrefix(word);
      //console.log(node.links)
      return node != null && node.isEnd();
    }
    
    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
      const node = this.searchPrefix(prefix);
      return node != null;
    }
  }
  
  /** 
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */