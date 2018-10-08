import cnfg from './cnfg.js';
import cnvrt from './cnvrt.js';
import vld8 from './vld8.js';
import Stck from './stck.js';
import output from './output.js';

const FlpJck = {
  // run entire input string through process
  run: async (str, output = true, console = false) => {
    const obj = await cnvrt(str);
    await vld8.all(obj, function(data) {
      if (output) FlpJck.output(obj, data);
      if (console) {
        console.log('Object:', obj);
        console.log('Tests:', data);
      }
    });
  },

  output: async (obj, data) => {
    const elo = document.getElementById(cnfg.html.output);
    if (elo) elo.innerHTML = '';
    if (data.errors) {
      if (elo) output.htmlError(elo, data.errors);
      // Do something with error messages.
    } else {
      FlpJck.fix(obj).then(results => {
        results.forEach(r => {
          if (elo) output.html(elo, r);
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
