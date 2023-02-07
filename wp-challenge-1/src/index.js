import _ from 'lodash'
import './index.css'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['webpack', 'dev', 'server'], ' ');
  element.classList.add('index')

  return element;
}

document.body.appendChild(component());