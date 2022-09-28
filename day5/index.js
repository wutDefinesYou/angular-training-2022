// Import stylesheets
import './style.css';

const state = {
  a: 'apple',
  b: 'banana',
  c: 'city',
  d: 'dom',
  e: 'end',
  f: 'forEach',
  g: 'gold',
};

// Write Javascript code!
// const appDiv = document.getElementById('app');
const letterDropDown = document.getElementById('letters');
const wordDropDown = document.getElementById('words');

if (state) {
  for (let [key, value] of Object.entries(state)) {
    letterDropDown.insertAdjacentHTML(
      'beforeend',
      `<option value="${key}">${key}</option>`
    );
    wordDropDown.insertAdjacentHTML(
      'beforeend',
      `<option value="${value}">${value}</option>`
    );
  }

  letterDropDown.addEventListener('change', (event) => {
    const selected = letterDropDown.options[letterDropDown.selectedIndex].value;
    wordDropDown.value = state[selected];
  });

  wordDropDown.addEventListener('change', (event) => {
    const selected = wordDropDown.options[wordDropDown.selectedIndex].value;
    letterDropDown.value = Object.keys(state).find(
      (key) => state[key] === selected
    );
  });
}
