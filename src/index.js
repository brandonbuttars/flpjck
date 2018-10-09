import cnfg from './cnfg.js';
import cnvrt from './cnvrt.js';
import vld8 from './vld8.js';
import output from './output.js';
import Stck from './stck.js';

const FlpJck = {
  // run entire input string through process
  run: async (str, output = false, proceed = true) => {
    const arr = [],
          obj = await cnvrt(str);
    await arr.push(obj);
    await vld8.all(obj, function(data) {
      arr.push(data);
      if (proceed) {
        if (output) FlpJck.output(obj, data);
        if (!output) FlpJck.console(obj, data);
      } else {
        if (data.errors) return [obj, data];
        FlpJck.fix(obj).then(results => {
          arr.push(results);
        });
      }
    });
    return arr;
  },

  test: (str) => FlpJck.run(str, false, false),

  output: async (obj, data) => {
    const elo = document.getElementById(cnfg.html.output);
    if (elo) elo.innerHTML = '';
    if (data.errors) {
      if (elo) output.htmlError(elo, data.errors);
    } else {
      FlpJck.fix(obj).then(results => {
        results.forEach(r => {
          if (elo) output.html(elo, r);
        });
      });
    }
  },

  console: async (obj, data) => {
    if (data.errors) {
      console.error('Errors:', data.errors);
    } else {
      FlpJck.fix(obj).then(results => {
        results.forEach(r => {
          console.log(output.case(r));
        });
      });
    }
  },

  fix: async (obj) => {
    const results = [];
    await obj.cases.forEach((stack, i) => {
      let p = new Stck(stack).insertSpatula();
      results.push([++i, p]);
    })
    return results;
  }
}

export default FlpJck;
