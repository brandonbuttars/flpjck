import cnfg from './cnfg.js';
import ut from './ut.js';
import err from './err.js';

const vld8 = {
  count: {
    num: (obj) => ut.isNum(obj.count),
    between: (obj) => ut.tween(obj.count, cnfg.case.min, cnfg.case.max),
    eq: (obj) => ut.eqNum(obj.count, obj.cases.length)
  },

  tests: {
    exist: (obj) => obj.cases.length > 0,
    chars: (obj) => ut.rgx.onlyArray(obj.cases, '+-'),
    short: (obj) => {
      let short = 0;
      obj.cases.forEach(o => {
        if (!ut.gte(o.length, cnfg.data.min)) ++short;
      });
      return !short;
    },
    long: (obj) => {
      let long = 0;
      obj.cases.forEach(o => {
        if (!ut.lte(o.length, cnfg.data.max)) ++long;
      });
      return !long;
    },
  },

  all: async function (obj, cb = false) {
    const count = {
      num: await this.count.num(obj),
      between: await this.count.between(obj),
      eq: await this.count.eq(obj)
    };

    const tests = {
      exist: await this.tests.exist(obj),
      chars: await this.tests.chars(obj),
      min: await this.tests.short(obj),
      max: await this.tests.long(obj)
    };

    const all = { count, tests };
    const errors = await err.batch(all);
    if (errors.length > 0) all.errors = errors;

    if (cb) await cb(all);

    return all;
  }
}

export default vld8;
