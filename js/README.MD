#NOTE
 1. 在事件代理下,offsetX是不可信的,因为子元素可能成为offset的起点
    事件代理的处理函数中this一定, e.target不一定
 2. 用touchpad 放大后,$(el).offset不准确了,忽略