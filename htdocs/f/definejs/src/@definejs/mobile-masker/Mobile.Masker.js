/**
* src: @definejs/mobile-masker/index.js
* pkg: @definejs/mobile-masker@1.0.0
*/
define('Mobile.Masker', function (require, module, exports) { 
    
    require('Touch');
    
    const Masker = require('Masker');
    
    Object.assign(Masker.defaults, {
        /**
        * 点击时需要用到的事件名。
        * 移动端的用虚拟事件 `touch`。
        */
        eventName: 'touch',
    });
    
    module.exports = Masker;
    
});