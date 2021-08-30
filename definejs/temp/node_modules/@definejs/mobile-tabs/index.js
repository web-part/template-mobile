

require('@definejs/touch');

const Tabs = require('@definejs/tabs');

Object.assign(Tabs.defaults, {
    /**
    * 点击时需要用到的事件名。
    * 移动端的用虚拟事件 `touch`。
    */
    eventName: 'touch',
});

module.exports = Tabs;

