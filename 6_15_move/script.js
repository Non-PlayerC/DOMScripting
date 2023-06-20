function positionMessage() {
    if (!document.getElementById || !document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    movement = setTimeout("moveMessage()", 5000);
}

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById || !document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.right);

    if (xpos === final_x && ypos === final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (xpos < final_y) {
        ypos++;
    }
    if (xpos > final_x) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = yops + "px";
    var repeat = "movement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(repeat, interval);
}

function moveMessage() {
    if (!document.getElementById || !document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.left = "200px";
    elem.style.color = "red";
}

addLoadEvent(positionMessage);