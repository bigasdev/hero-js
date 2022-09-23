import { Asset, createAsset } from "./assets";
import { printText } from "./font";
import { getCanvas, getContext, setCanvas } from "./global";
import { getMiddleX, getMiddleY } from "./util";


export default function start(){
    //setting the canvases;
    console.log("started the graphics.js");
    setCanvas(0, document.getElementById('canvas'));

    setTimeout(() => {
        createAsset(new Asset("logo", getMiddleX(getCanvas(0), -45), getMiddleY(getCanvas(0), -140), 3), getContext(0));
        printText("Hello World!!", getMiddleX(getCanvas(0), -70), getMiddleY(getCanvas(0), -50), 2, 0);
        printText("This website was powered by the hero framework.", getMiddleX(getCanvas(0), -140), getMiddleY(getCanvas(0), -20), 1, 0);
    }, 200);
}