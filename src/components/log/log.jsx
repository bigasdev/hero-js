import { createElement, createFragment } from "/src/global";

/** @jsx createElement */
/** @jsxFrag createFragment */

var logBackup = console.log;
var logs = 0;
var logTab;

function LogMessage(p) {
    return (
        <div id={p.obj.value[0]} class="log-block">
            <span id="title" class="type">
                <span id="title" class="fa-solid fa-plant-wilt"></span>
            </span>
            <span id="msg">{p.obj.value}</span>
        </div>
    );
}

export function Log() {
    return (
        <div id="log" class="log">
            <div id="buttons" class="buttons">
                <button
                    id="log-button"
                    onClick={() => {
                        console.log("click");
                        if (logTab.style.display === "block") {
                            logTab.style.display = "none";
                        } else {
                            logTab.style.display = "block";
                        }
                    }}
                >
                    <span id="log-button-counter">0</span>
                    <i class="fa-solid fa-shield fa-1xl"></i>
                </button>
                <button
                    id="log-erase-button"
                    onClick={() => {
                        logs = 0;
                        var child = logTab.lastElementChild;
                        while (child) {
                            logTab.removeChild(child);
                            child = logTab.lastElementChild;
                        }
                        console.clear();
                        console.log("erased all the data");
                    }}
                >
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </div>
            <div id="log-tab" class="log-tab"></div>
        </div>
    );
}

console.log = function () {
    logBackup.apply(console, arguments);
    logTab = document.getElementById("log-tab");
    logs++;
    var lc = document.getElementById("log-button-counter");
    if (lc) {
        lc.innerHTML = logs;
        if (arguments.length >= 50) return;
        logTab.appendChild(
            <LogMessage
                obj={{
                    type: "log",
                    datetime: Date().toLocaleString(),
                    value: Array.from(arguments),
                }}
            ></LogMessage>
        );
    }
    /*if (l)
        l.appendChild(
            <LogButton
                name={{
                    type: "log",
                    datetime: Date().toLocaleString(),
                    value: Array.from(arguments),
                }}
            ></LogButton>
        );*/
};
