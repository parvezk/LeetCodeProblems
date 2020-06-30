/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class Node {
  constructor(st, t) {
    this.sentences = st;
    this.time = t;
  }
}

class Trie {
  constructor() {
    this.times
    this.branches = new Array(27);
  }
}

class AutocompleteSystem {
  constructor(sentences, times) {
    this.root = new Trie();
    this.cur_sent = "";
    for (let i = 0; i < sentences.length; i++)
      this.insert(this.root, sentences[i], times[i]);
  }
  
  toInt = c => c == ' ' ? 26 : c - 'a';
  
  insert(t, s, times) {
    for (let i = 0; i < s.length; i++) {
      if (t.branches[this.toInt(s.charAt(i))] == null)
        t.branches[this.toInt(s.charAt(i))] = new Trie();
      t = t.branches[this.toInt(s.charAt(i))];
    }
    t.times += times;
  }
  
  lookup = (t, s) => {
    for (let i = 0; i < s.length; i++) {
      if (t.branches[this.toInt(s.charAt(i))] == null)
        return [];
      t = t.branches[this.toInt(s.charAt(i))];
    }
    return this.traverse(s, t, []);
  }
  
  traverse = (s, t, list) => {
    if (t.times > 0) list.push(new Node(s, t.times));
    for (let i = 0; i < 26; i++) {
      let c = (i+10).toString(36);
      if (t.branches[c - 'a'] != null)
        this.traverse(s + i, t.branches[c - 'a'], list);
    }
    if (t.branches[26] != null)
      traverse(s + ' ', t.branches[26], list)
  }

  input = c => {

  }
}

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */