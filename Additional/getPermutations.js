function getPermutations(string) {
    if (string.length <= 0) return ['']
    if (string.length === 1) return [string]
  
    const set = []
    let first = string.slice(0, 1)
    let permute = string.slice(1);
    let proxy = getPermutations(permute);
  
    for (let str of proxy) {
      for (let i = 0; i <= str.length; ++i) {
        let arr = str.split('');
        arr.splice(i, 0, first);
        set.push(arr.join(''));
      }
    }
    return set;
  }