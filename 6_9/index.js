(function () {
    let node = document.getElementsByTagName("body")[0];
    node.setAttribute("style", "backGround: red");


    let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute("download", "false");
    }

}())
window.onload = function () {
    prepareLinks();
    prepareGalley();
};
var links = document.getElementsByTagName("a");

// 对图片库进行修改
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("tltle") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        };// firstChild 拿到文本节点的内容
    }
    return true;
}

// 弹出窗口
function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480")
}

/*
(1) 把文档里的所有链接全放入一个数组里。
(2) 遍历数组。
(3) 如果某个链接的class属性等于popup，就表示这个链接在被点击时应该调用popUp()函数。
于是，A．把这个链接的href属性值传递给popUp()函数；B．取消这个链接的默认行为，不让这个链接把访问者带离当前窗口。
*/
function prepareLinks() {
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") === "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
/*
❑ 检查当前浏览器是否理解getElementsByTagName。
❑ 检查当前浏览器是否理解getElementById。
❑ 检查当前网页是否存在一个id为imagegallery的元素。
❑ 遍历imagegallery元素中的所有链接。
❑ 设置onclick事件，让它在有关链接被点击时完成以下操作：
    ■ 把这个链接作为参数传递给showPic函数；
    ■ 取消链接被点击时的默认行为，不让浏览器打开这个链接。
*/
function prepareGalley() {
    var gallery = document.getElementById("imagegallery");
    var link = gallery.getElementsByTagName("a");
    if (!document.getElementsByTagName || !document.getElementById || !gallery) return false;

    for (var i = 0; i < links.length; i++) {
        link[i].onclick = function () {
            return showPic(this) ? false : true;
        }
        link[i].onkeypress = link[i].onclick;
    }
}


