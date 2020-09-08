/**
 * initialize your data structure here.
 */
class MinStack {
  _stack = [];

  _last = (arr = this._stack) => (arr[arr.length - 1]);

  push = (x) => {
    if (this._stack.length == 0) {
      this._stack.push([x, x]);
      return;
    }
    
    const currentMin = this._last()[1];
    this._stack.push([x, Math.min(currentMin, x)]);
    
  }
  
  pop = () => this._stack.pop();

  top = () => this._last()[0];

  getMin = () => this._last()[1];
}