
var MyCalendarTwo = function() {
  this.calendar = [];
  this.overlaps = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
   
  for (let evt of this.overlaps) {
    if (start < evt[1] && evt[0] < end)
      return false;
  }
  
  for (let evt of this.calendar) {
    if (start < evt[1] && evt[0] < end)
      this.overlaps.push([Math.max(evt[0], start), Math.min(evt[1], end)]);
  }
  this.calendar.push([start, end]);
  return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */