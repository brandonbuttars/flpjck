import cnfg from './cnfg.js';

const lbls = cnfg.labels;

const txt = {
  error: {
    count: {
      num: `The number of ${lbls.case.p} declared is not a number. (T)`,
      between: `The number of ${lbls.case.p} declared exceeds ${cnfg.case.max}. (T)`,
      eq: `The number of ${lbls.string.p} does not match the number of ${lbls.case.p}. Make sure there are no trailing empty lines. (S)`
    },
    tests: {
      exist: `No ${lbls.string.p} have been defined.  Please define some.`,
      chars: `One or more ${lbls.string.p} contains ${lbls.char.p} other than + and -. This may include trailing spaces.`,
      min: cnfg.data.min === 0 ? `One or more ${lbls.string.p} are empty.` : `One or more ${lbls.string.p} do not contain the minimum of ${cnfg.data.min}+ characters.`,
      max: `One or more ${lbls.string.p} exceed the maximum of ${cnfg.data.max} characters.`
    },
    output: {
      html: 'Input Errors'
    }
  }
}

export default txt;
