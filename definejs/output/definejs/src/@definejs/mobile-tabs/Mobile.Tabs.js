/**
* src: @definejs/mobile-tabs/index.js
* pkg: @definejs/mobile-tabs@1.0.0
*/
define('Mobile.Tabs', function (require, module, exports) { 
    
    
    require('Touch');
    
    const Tabs = require('Tabs');
    
    Object.assign(Tabs.defaults, {
        /**
        * 点击时需要用到的事件名。
        * 移动端的用虚拟事件 `touch`。
        */
        eventName: 'touch',
    });
    
    module.exports = Tabs;
    
    
});