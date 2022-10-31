import { createElement, createFragment } from "../global";
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

    document.getElementById("main").appendChild(HelloWorld());
    document
        .getElementById("castle")
        .appendChild(<Button buttonName="Learn more!" />);
};
