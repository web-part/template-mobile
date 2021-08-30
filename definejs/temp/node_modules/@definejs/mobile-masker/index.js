
require('@definejs/touch');

const Masker = require('@definejs/masker');

Object.assign(Masker.defaults, {
    /**
    * 点击时需要用到的事件名。
    * 移动端的用虚拟事件 `touch`。
    */
    eventName: 'touch',
});

module.exports = Masker;
