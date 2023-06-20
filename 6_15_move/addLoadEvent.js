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