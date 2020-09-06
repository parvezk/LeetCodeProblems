/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
    this.flattenedArr = [].concat(...[...v])
    console.log(this.flattenedArr)
  };
  
  /**
   * @return {number}
   */
  Vector2D.prototype.next = function() {
    return this.flattenedArr.shift()
  };
  
  /**
   * @return {boolean}
   */
  Vector2D.prototype.hasNext = function() {
    return this.flattenedArr.length != 0;
  };
  
  /** 
   * Your Vector2D object will be instantiated and called as such:
   * var obj = new Vector2D(v)
   * var param_1 = obj.next()
   * var param_2 = obj.hasNext()
   */