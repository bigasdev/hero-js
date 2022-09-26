import { createElement, createFragment } from "../global";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Hello(props){
    return <div>Hello {props.name}</div>;
}

function HelloWorld(){
    return <Hello name="World" />;
}

export const initliazeCastle = () => {

}

document.getElementById('main').appendChild(HelloWorld());