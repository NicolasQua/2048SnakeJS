import { query_selector_footer, query_selector_left } from "../../js/components/request.queryselector.js";

let inputStates = {};

function definitEcouteurs() {
    definirEcouteurClavier();
}

function capteEvent(event){
    if( event.preventDefault ){
        event.preventDefault();
        event.stopPropagation();
    }else{
        Event.returnValue = false;
        Event.cancelBubble = true;
    }
}

function definirEcouteurClavier() {
    document.onkeydown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                inputStates.gauche = true;
                break;
            case "ArrowRight":
                inputStates.droite = true;
                break;
            case "ArrowUp":
                inputStates.haut = true;
                break;
            case "ArrowDown":
                inputStates.bas = true;
                break;
            case " ":
                inputStates.espace = true;
                break;
        }
        capteEvent(event);
    }

    document.onkeyup = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                inputStates.gauche = false;
                break;
            case "ArrowRight":
                inputStates.droite = false;
                break;
            case "ArrowUp":
                inputStates.haut = false;
                break;
            case "ArrowDown":
                inputStates.bas = false;
                break;
            case " ":
                inputStates.espace = false;
                break;
        }
        capteEvent(event);
    }
}

function ecouteursButtonsPlay (){
    let selector = `[id='play']`;
    let button = query_selector_left(selector);
    if (button === null)
        return;
    return button;
}

function ecouteursButtonsStop (){
    let selector = `[id='stop']`;
    let button = query_selector_left(selector);
    if (button === null)
        return;
    return button;
}

function ecouteursButtonsChangeBg1 (){
    let selector = `[id='bg-image1']`;
    let button = query_selector_left(selector);
    if (button === null)
        return;
    return button;
}

function ecouteursButtonsChangeBg2 (){
    let selector = `[id='bg-image2']`;
    let button = query_selector_left(selector);
    if (button === null)
        return;
    return button;
}

function ecouteursButtonsChangeBg3 (){
    let selector = `[id='bg-image3']`;
    let button = query_selector_left(selector);
    if (button === null)
        return;
    return button;
}

function ecouteursButtonsReset (){
    let selector = `[id='reset']`;
    let button = query_selector_footer(selector);
    if (button === null)
        return;
    return button;
}

export { definitEcouteurs,
         inputStates,
         ecouteursButtonsPlay,
         ecouteursButtonsStop,
         ecouteursButtonsReset,
         ecouteursButtonsChangeBg1,
         ecouteursButtonsChangeBg2,
         ecouteursButtonsChangeBg3
        }