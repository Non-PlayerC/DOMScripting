function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // 取得文件中的所有链接
    var links = document.getElementsByTagName("a");
    // 创建一个数组保存访问键
    var akeys = new Array();
    // 遍历链接
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        if (!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");// 取得 accesskey 的值 -> 1
        var text = current_link.lastChild.nodeValue;// --> Home
        akeys[key] = text;// 1--> Home
    }
    // 创建列表
    var list = document.createElement("ul");
    for (key in akeys) {
        var text = akeys[key];
        var str = key + ": " + text;
        // 创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        // 把列表添加到列表中
        list.appendChild(item);
    }
    // 创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    // 将标题添加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);