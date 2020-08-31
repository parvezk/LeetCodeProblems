//https://leetcode.com/discuss/interview-question/124822/Bloomberg-or-First-Unique-Number-in-Data-Stream

class Stream {
    
    constructor() {
      this.set = new Set();
    }

	/**
	* Adds integer num to a stream of integers.
	*/
    add(num) {
      if (this.set.has(num))
        this.set.delete(num);
      else
        this.set.add(num);
    }

	/**
	*  Returns the first unique integer in the stream if found else return null.
	*/
    getFirstUnique() {
      const next = this.set.values().next();
      if (!next.done) return next.value;
      else return null;
    }
}


(function main() {
  const s = new Stream();
  s.add(2);
  console.log(s.getFirstUnique()); // 2
  s.add(2);
  console.log(s.getFirstUnique()); // null
  s.add(3);
  console.log(s.getFirstUnique()); // 3
  s.add(4);
  console.log(s.getFirstUnique()); // 3
  s.add(3);
  console.log(s.getFirstUnique()); // 4
  
  
  
}());