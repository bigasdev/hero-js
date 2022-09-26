import fontAtlas from '/assets/img/fontAtlas.png';
import atlas from '/assets/img/atlas.png';
import fontJson from '/assets/atlas-sources/font.json';
import atlasJson from '/assets/atlas-sources/atlas.json';

import _ from 'lodash';
import { asepriteConfig } from './assets.js';
import start from './graphics.js';

import { initliazeCastle } from './components/castle.jsx';

import "./main.css";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    asepriteConfig([fontAtlas, atlas], [fontJson, atlasJson]);

    //quick delay so we have time to load everything.
    setTimeout(()=>{
      start();
    }, 100)
  
    return element;
  }
  
  document.body.appendChild(component());