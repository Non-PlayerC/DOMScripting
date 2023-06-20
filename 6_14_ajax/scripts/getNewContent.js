function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                /*
                ❑ 0表示未初始化❑ 1表示正在加载❑ 2表示加载完毕❑ 3表示正在交互❑ 4表示完成
                */
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        }
        request.send(null);
    } else {
        alert("Sorry,your browser doesn\'t support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent)