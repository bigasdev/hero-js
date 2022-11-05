import { createElement, createFragment } from "/src/global";

/** @jsx createElement */
/** @jsxFrag createFragment */
function Expandable() {
    return (
        <div
            id="expandable"
            class="expandable"
            onClick={() => {
                expandableClose();
            }}
        >
            <span
                class="fa-solid fa-square-xmark fa-2x"
                onClick={() => {
                    console.log("venancio");
                    expandableClose();
                }}
            ></span>
            <div id="expandable-image" class="image">
                <img id="expandable-img-src" src="/assets/img"></img>
            </div>
            <div id="expandable-text" class="text">
                <h id="expandable-text-src">Hello World</h>
            </div>
        </div>
    );
}

export function expandableClose() {
    document.getElementById("expandable").style.display = "none";
}
export function expandableOpen(src, description) {
    document.getElementById("expandable").style.display = "block";
    document.getElementById("expandable-img-src").src = src;
    document.getElementById("expandable-text-src").innerHTML = description;
}

export function StartExpandable() {
    document.body.appendChild(Expandable());
}
