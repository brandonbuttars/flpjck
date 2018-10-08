import ut from './ut.js';

export default class Stck {
  constructor(stack) {
    this.STACK = stack;
    this.stack = stack.split('');
    this.top = this.stack || [];
    this.bottom = [];
    this.count = 0;
  }

  insertSpatula(top = this.top, bottom = this.bottom, count = this.count) {
    let i = top.length;
    do {
      if (top[0] === '+' && top[i - 1] === '-') {
        this.flipTop(top); ++count;
      } else if (top[i - 1] !== '+') {
        return this.insertSpatula(this.flipStack(top), bottom, ++count);
      } else {
        this.leaveStacked(top, bottom); --i;
      }
    } while (i > 0)
    return count;
  }

  updateItem(input) {
    return input === '+' ? '-' : '+';
  }

  flipTop(top = this.top) {
    let cnt = ut.rgx.countLeft(top) || 1;
    for (let i = cnt - 1; i >= 0; --i) {
      top[i] = this.updateItem(top[i]);
    }
  }

  flipStack(arr = this.top) {
    return arr.reverse().map(p => this.updateItem(p));
  }

  leaveStacked(top = this.top, bottom = this.bottom) {
    return bottom.unshift(top.pop());
  }
}
