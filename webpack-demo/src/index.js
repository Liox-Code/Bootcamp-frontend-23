import _ from 'lodash'
import './style.css'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'index.js'], ' ');
  element.classList.add('index')

  return element;
}

document.body.appendChild(component());