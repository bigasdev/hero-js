import { clearAsset, getAsset, updateAsset } from "../assets";
import { createElement, createFragment, getContext } from "../global";
import { addEvent, startInput } from "../input";
import { Log } from "./log/log.jsx";

/** @jsx createElement */
/** @jsxFrag createFragment */

function Button(props) {
    return (
        <button id={props.buttonName} onClick={() => console.log("clicked!")}>
            {props.buttonName}
        </button>
    );
}

function Hello(props) {
    return (
        <div class="castle" id="castle">
            Hello {props.name} created with 🏰castle.jsx
        </div>
    );
}

function HelloWorld() {
    return <Hello name="world" />;
}

export const initliazeCastle = () => {
    if (process.env.NODE_ENV === "development") {
        document.getElementById("main").appendChild(Log());
    }

    startInput();
    addEvent("a", ()=>{
        clearAsset("logo", getContext(0));
        getAsset("logo").dx -= 50;
        updateAsset("logo", getContext(0));
    })
    addEvent("d", ()=>{
        clearAsset("logo", getContext(0));
        getAsset("logo").dx += 50;
        updateAsset("logo", getContext(0));
    })
    addEvent("w", ()=>{
        clearAsset("logo", getContext(0));
        getAsset("logo").dy -= 50;
        updateAsset("logo", getContext(0));
    })
    addEvent("s", ()=>{
        clearAsset("logo", getContext(0));
        getAsset("logo").dy += 50;
        updateAsset("logo", getContext(0));
    })

    document.getElementById("main").appendChild(HelloWorld());
    document
        .getElementById("castle")
        .appendChild(<Button buttonName="Learn more!" />);
};
