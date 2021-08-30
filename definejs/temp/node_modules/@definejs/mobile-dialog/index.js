
const Masker = require('@definejs/mobile-masker');
const Scroller = require('@definejs/scroller');
const Dialog = require('@definejs/dialog');

//针对移动端的差异化配置。
Object.assign(Dialog.defaults, {
    /**
    * 遮罩层的构造函数。
    * 移动端需要在外部加载 Masker 模块后传入。
    */
    Masker,
    /**
    * 滚动器的构造函数。
    * 移动端需要在外部加载 Scroller 模块后传入。
    */
    Scroller,
    /**
    * 组件宽度。
    * 可以指定为百分比的字符串，或指定具体的数值（单位为像素），
    */
    width: '80%',
    /**
    * 组件高度。
    * 可以指定为百分比的字符串，或指定具体的数值（单位为像素），
    */
    height: '50%',
    /**
    * 内容区是否可滚动。
    */
    scrollable: true,
    /**
    * 针对滚动器 Scroller 的配置。
    */
    scroller: {},
    /**
    * 点击按钮时需要用到的事件名。
    * 针对移动端的是虚拟事件 'touch'。
    */
    eventName: 'touch',

});

module.exports = Dialog;
