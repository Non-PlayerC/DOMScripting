function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href"); // 获取whichpic元素节点
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function countBodyChildren() {
    var body_elemnt = document.getElementsByTagName("body")[0];
    // alert(body_elemnt.childNodes.length);// 13
    /*
    ❑ 元素节点的nodeType属性值是1。
    ❑ 属性节点的nodeType属性值是2。
    ❑ 文本节点的nodeType属性值是3。
    */
    // alert(body_elemnt.nodeType);// 1
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
function prepareGallery() {
    var gallery = document.getElementById("imagegallery");
    if (!document.getElementsByTagName || !document.getElementById || gallery) return false;
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this) ? false : true;
        }
        // 绑定键盘事件
        // links[i].onkeypress = links[i].onclick;
    }
}
/*
❑ 把现有的window.onload事件处理函数的值存入变量oldonload。
❑ 如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
❑ 如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾。
*/
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
        /*
            当页面加载完成后，该事件句柄会检查是否存在已注册的回调函数。如果存在，则创建一个新的匿名函数，并分别调用原有的和新的回调函数；否则，直接将传入的回调函数赋值给window.onload属性。
        */
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
// 这段代码通过使用以上三个函数，实现了为图片库中的所有链接添加点击事件，并在单击某个链接时切换占位符图片的显示内容。
// 同时，它还确保了这些功能都是在页面完成后执行的，以避免由于DOM树未完全构建而导致的错误或意外行为发生
addLoadEvent(prepareGallery)

/*
(1) 创建一个img元素节点。(2) 设置这个节点的id属性。
(3) 设置这个节点的src属性。(4) 设置这个节点的alt属性。
(5) 创建一个p元素节点。(6) 设置这个节点的id属性。
(7) 创建一个文本节点。(8) 把这个文本节点追加到p元素上。
(9) 把p元素和img元素插入到gallery.html文档。
*/
function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "./image/5.jfif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("please Choose an image");

    description.appendChild(desctext);
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder)
}

// 创建插入节点后的工具
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement, "nextSibling");
    }
}

addLoadEvent(preparePlaceholder)