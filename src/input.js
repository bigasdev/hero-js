const eventsMap = new Map();

export const addEvent = (key,event) => {
    eventsMap.set(key, event);
}

const getEvent = (key) => {
    return eventsMap.get(key);
}

const removeEvent = (key) => {
    eventsMap.delete(key);
}

export const startInput = (msg) => {
    if(msg)console.log(msg);

    document.onkeypress = function (e) {
        e = e || window.event;

        console.log(e);
        var event = getEvent(e.key);
        if(event)event();
    }
}