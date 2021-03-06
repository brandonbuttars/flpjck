const ut = {
  // to: (val, typ) => typeof val === typ,
  isNum: (val) => !isNaN(+val),
  gte: (val, min) => +val >= +min,
  lte: (val, max) => +val <= +max,
  tween: (val, min = 1, max) => +val >= +min && +val <= +max,
  // eq: (val1, val2) => val1 === val2,
  eqNum: (val1, val2) => +val1 === +val2,
  // trimArray: (arr) => arr.map(str => str.trim()),
  rgx: {
    only: (val, str) => new RegExp(`^[${str}]+$`).test(val),
    onlyArray: (arr, str) => ut.rgx.only(arr.join(''), str),
    countLeft: (arr, char = '+') => {
      let cnt = 0, i = 0, more = true;
      do {
        if (arr[i] === char) {
          ++cnt && ++i;
        } else {
          more = false;
        }
      } while (i <= arr.length && more === true)
      return cnt;
    }
  },
  c: console.log
}

export default ut;
