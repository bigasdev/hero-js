import _ from 'lodash';
import helloWorld from './graphics.js';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    helloWorld();
  
    return element;
  }
  
  document.body.appendChild(component());