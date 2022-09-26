//constant variables
export const canvas = 0;
var mousePos = {
    x: 0,
    y: 0
};
var view = [];
var context = [];
var currentWindow = {
    w: 0,
    h: 0
};

export const setCanvas  = (pos, c) => {
    update();

    view[pos] = c;
    context[pos] = c.getContext('2d');
    view[pos].width = window.innerWidth;
    view[pos].height = window.innerHeight;

    context[pos].imageSmoothingEnabled = false;
}
export const getCanvas = (id) => {
    return view[id];
}
export const getContext = (id) => {
    return context[id];
}
export const getCurrentWindow = () => {
    return currentWindow;
}

export const setMousePos = (pos) => {
    mousePos = pos;
}
export const getMousePos = () => {
    return mousePos;
}

export function update(){
    //window size
    currentWindow.w = window.innerWidth;
    currentWindow.h = window.innerHeight;
}
export const createElement = (tag, props, ...children) => {
    if (typeof tag === "function") return tag(props, children)
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	children.forEach((child) => {
		appendChild(element, child)
	})

	return element;
}

const appendChild = (parent, child) => {
	if (Array.isArray(child))
		child.forEach((nestedChild) => appendChild(parent, nestedChild))
	else
		parent.appendChild(
			child.nodeType ? child : document.createTextNode(child)
		)
}

export const createFragment = (props, ...children) => {
	return children
}