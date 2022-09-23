export function download(filename, json){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + JSON.stringify(json));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

export function isIntersect(point, element){
    var value = point.x > element.x && point.x < (element.x + element.source.width) && point.y > element.y && point.y < (element.y + element.source.height);
    return value;
}

export const getMiddleX = (canvas, x) => {
    return Math.floor(canvas.width/2 + x);
}
export const getMiddleY = (canvas, y) => {
    return Math.floor(canvas.height/2 + y);
}