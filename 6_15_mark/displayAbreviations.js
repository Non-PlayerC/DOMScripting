function displayAbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    var abbreviations = document.getElementsByTagName("abbr");// 获取所有的 abbr 节点
    if (abbreviations.length < 1) return false;
    // 获得每个 abbr 标签的文本以及title属性的值
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;// 这个文本节点的nodeValue属性
        defs[key] = definition;
    }
    // 创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        // 创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        // 创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        // 添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbreviations);