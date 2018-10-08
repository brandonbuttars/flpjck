import FlpJck from './src/index.js';
import cnfg from './src/cnfg.js';
import txt from './src/txt.js';

// UI Initializer
document.addEventListener('DOMContentLoaded', () => {
  const eli = document.getElementById(cnfg.html.input),
        elo = document.getElementById(cnfg.html.output),
        trgr = document.getElementById(cnfg.html.trigger);

  trgr.addEventListener(cnfg.html.event, (e) => {
    e.preventDefault();
    elo.scrollIntoView({ behavior: 'smooth' });
    if (eli.value) {
      FlpJck.run(eli.value);
    } else {
      elo.innerHTML = `<div class="helpful">${txt.error.output.empty}</div>`;
    }
  });
});
