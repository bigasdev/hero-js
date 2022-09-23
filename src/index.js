import fontAtlas from '/assets/img/fontAtlas.png';
import fontJson from '/assets/atlas-sources/font.json';

import _ from 'lodash';
import { asepriteConfig } from './assets.js';
import start from './graphics.js';

import "./main.css";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    asepriteConfig([fontAtlas], [fontJson]);

    //quick delay so we have time to load everything.
    setTimeout(()=>{
      start();
    }, 10)
  
    return element;
  }
  
  document.body.appendChild(component());