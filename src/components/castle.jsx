import { createElement, createFragment } from "../global";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Hello(props){
    return <div class="castle">Hello {props.name} created with 🏰castle.jsx</div>;
}

function HelloWorld(){
    return <Hello name="world" />;
}

export const initliazeCastle = () => {

}

document.getElementById('main').appendChild(HelloWorld());