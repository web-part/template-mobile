

const $ = require('jquery');
const $Object = require('@definejs/object');

//判断元素是否为文本输入框。
function isTextbox(el) {
    let tagName = el.tagName.toLowerCase();

    if (tagName == 'textarea') {
        return true;
    }

    if (tagName == 'input') {
        return true;
    }

    return false;

}


//创建处理器。
function createHandler(fn, pressedClass) {
    let x = 0;
    let y = 0;
    let disabled = false; //针对按钮给禁用的情况。

    return {
        'touchstart': function (event) {
            let originalEvent = event.originalEvent;
            let t = originalEvent.changedTouches[0];
            let target = originalEvent.target;

            disabled = target.disabled;

            if (disabled) {
                return;
            }

            x = t.pageX;
            y = t.pageY;

            if (pressedClass) {
                $(this).addClass(pressedClass);
            }

            //在浏览器端长按左键时会弹出浏览器的上下文菜单，会导致 `按住->拖动` 来取消的效果失败。
            //而阻止默认动作，就可以禁止浏览器弹出上下文菜单，但同时也会导致文本框无法获得输入焦点。
            //因此需要有选择地来阻止默认事件。
            if (!isTextbox(target)) {
                event.preventDefault();
            }

        },

        'touchend': function (event) {
            if (disabled) {
                return;
            }

            if (pressedClass) {
                $(this).removeClass(pressedClass);
            }

            let t = event.originalEvent.changedTouches[0];
            let dx = t.pageX - x;
            let dy = t.pageY - y;
            let dd = Math.sqrt(dx * dx + dy * dy);

            x = 0;
            y = 0;

            if (dd > 10) {
                return;
            }

            fn.apply(this, [...arguments]);
        },
    };
}



/**
* 扩展 jQuery 原型，使其实例上具有此方法。
* 已重载 touch({}, pressedClass);  //批量绑定委托。
* 已重载 touch(fn, pressedClass);  //在当前元素上绑定事件
* 已重载 touch(selector, fn, pressedClass); //单个绑定委托。
*/
$.fn.touch = function (selector, fn, pressedClass) {
    //重载 touch({}, pressedClass); 
    //批量绑定的委托。
    //如 $(div).touch({ 's': fn,  ...  }, pressedClass);
    if ($Object.isPlain(selector)) {
        let self = this;
        let selector$fn = selector;

        pressedClass = fn;

        $Object.each(selector$fn, function (selector, fn) {
            let handler = createHandler(fn, pressedClass);

            $(self).delegate(selector, handler);
        });

        return this;
    }


    //重载 touch(fn, pressedClass);
    //在当前元素上绑定。
    //如 $(div).touch(fn, pressedClass);
    if (typeof selector == 'function') {
        pressedClass = fn;
        fn = selector;
        selector = null;

        let handler = createHandler(fn, pressedClass);

        return $(this).on(handler);
    }


    //重载 touch(selector, fn, pressedClass);
    //单个绑定委托。
    //如 $(div).touch(selector, fn, pressedClass);
    let handler = createHandler(fn, pressedClass);

    return $(this).delegate(selector, handler);

};

module.exports = $;