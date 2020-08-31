
(function main() {
    const map1 = new Map();
    map1.set(1, 'foo');
    map1.set(2, 'bar');
    map1.set(3, 'basdr');
  
  let ds = map1.keys();
  let iter = ds.next();
  //console.log(iter.value)
  //iter = ds.next()
  //console.log(iter.value)
  while (!iter.done) {
    console.log(iter.value);
    iter = ds.next();
  }
  }());