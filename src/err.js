import cnfg from './cnfg.js';
import txt from './txt.js';

const err = {
  batch: async (obj) => {
    const errors = [];

    const arr = [
      ['count', ['num', 'between', 'eq']],
      ['tests', ['exist', 'chars', 'min', 'max']]
    ];

    await arr.forEach(a => {
      a[1].forEach(e => {
        if (!obj[a[0]][e]) errors.push(txt.error[a[0]][e]);
      });
    });

    switch (cnfg.error.style) {
      case 'alert': await err.alert(errors);
      default: await err.log(errors);
    }
    return errors;
  },

  log: (arr) => {
    arr.forEach(e => console.error(e));
  },

  alert: (arr) => {
    arr.forEach(e => alert(e));
  }
}

export default err;
