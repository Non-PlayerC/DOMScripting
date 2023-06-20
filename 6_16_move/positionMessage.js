function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;

    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveElement("message", 125, 25, 20);


    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "150px";
    elem.style.top = "300px";
    moveElement("message2", 200, 60, 20);
}

addLoadEvent(positionMessage);