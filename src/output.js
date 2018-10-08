import txt from './txt.js';

const output = {
  case: (arr) => `Case #${arr[0]}: ${arr[1]}`,
  console: (arr) => {
    console.log('Object:', arr[0]);
    console.log('Test Results:', arr[1]);
  },
  html: (el, arr, style = 'case') => {
    // let el = document.getElementById(id);
    if (el) el.insertAdjacentHTML('beforeend', `<div id="case-${arr[0]}" class="output">${output[style](arr)}</div>`);
  },
  htmlError: (el, arr) => {
    if (el) {
      el.insertAdjacentHTML('beforeend', `<h4 id="output-error" class="error">${txt.error.output.html}</h4>`);
      arr.forEach((e, i) => {
        el.insertAdjacentHTML('beforeend', `<div id="error=${++i}" class="error msg">${e}</div>`);
      });
    }
  }
}

export default output;
