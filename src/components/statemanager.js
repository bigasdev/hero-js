export const States = {
    IDLE: Symbol("idle"),
    POPUP: Symbol("popup")
}

let state = States.IDLE;

export const setState = (_state, message, callback) => {
    if(message)console.log(message);
    if(callback)callback();
    state = _state;
    console.log(state);
}
export const getState = () =>{
    return state;
}