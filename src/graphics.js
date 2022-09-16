import test from './import.js';

export default function helloWorld(){
    console.log('hello world!');
    var t = document.getElementById('test');
    t.innerHTML = "HELLO WORLD!";
    test();
}