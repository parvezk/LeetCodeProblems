// Using backtrack to check each character of word to search.
class TrieNode {
    constructor() {
      // R links to Node Characters
      this.children = new Array(26).fill(null);
      this.item = "";
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert (word) {
      let node = this.root;
      for (let c of word) {
        let code = c.charCodeAt(0) - 97;
        if (node.children[code] == null)
          node.children[code] = new TrieNode();
        node = node.children[code];
      }
      node.item = word;
    }
    
    search(word) {
      return this.match(word, 0, this.root);
    }
    
    match(word, index, node) {
      if (index == word.length) return node.item != "";
      
      if (word[index] != ".") {
        let code = word.charAt(index).charCodeAt(0) - 97;
        return node.children[code] != null && this.match(word, index + 1, node.children[code]);
      } else {
        
        for (let i = 0; i < node.children.length; i++) {
          if (node.children[i] != null) {
            if (this.match(word, index + 1, node.children[i]))
              return true;
          }
        }
      }
      return false;
    }
    
  }
  
  var WordDictionary = function() {
    this.words = new Trie()
  };
  
  WordDictionary.prototype.addWord = function(word) {
    this.words.insert(word);
  };
  
  WordDictionary.prototype.search = function(word) {
    return this.words.search(word);
  };