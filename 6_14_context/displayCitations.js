/*
(1) 遍历这个文档里所有blockquote元素。
(2) 从blockquote元素提取出cite属性的值。
(3) 创建一个标识文本是source的链接。
(4) 把这个链接赋值为blockquote元素的cite属性值。
(5) 把这个链接插入到文献节选的末尾。
*/
function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];

        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);

        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);