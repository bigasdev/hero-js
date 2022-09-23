import { printText } from "./font";
import { getCanvas, getContext, setCanvas } from "./global";
import { getMiddleX, getMiddleY } from "./util";


export default function start(){
    //setting the canvases;
    setCanvas(0, document.getElementById('canvas'));

    printText("Hello World!!", getMiddleX(getCanvas(0), -70), getMiddleY(getCanvas(0), -50), 2, 0);
    printText("This website was powered by the bigasdev framework.", getMiddleX(getCanvas(0), -140), getMiddleY(getCanvas(0), -20), 1, 0);

}