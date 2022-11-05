import { isDev } from "./global";

class HeroElement {
    constructor(element, id) {
        this.dom = element;
        this.id = id;
    }

    hide() {
        this.dom.style.display = "none";
    }

    show(style) {
        if (style) this.dom.style.display = style;
        this.dom.style.display = "block";
    }
}

var elements = [];

export function findDOM(id) {
    var i = document.getElementById(id);

    if (i === null) {
        if (isDev) console.log(`${id} not found`);
        return;
    }

    var he = new HeroElement(i, i.id);

    const found = elements.find((element) => element.id === id);

    if (found) {
        if (isDev) console.log(`${id} already in the query`);
        return found;
    }

    if (isDev) {
        console.log(i.id);
    }

    elements.push(he);
    return he;
}
