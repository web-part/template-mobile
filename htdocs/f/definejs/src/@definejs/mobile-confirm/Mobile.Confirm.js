/**
* src: @definejs/mobile-confirm/index.js
* pkg: @definejs/mobile-confirm@1.0.0
*/
define('Mobile.Confirm', function (require, module, exports) { 
    
    const Dialog = require('Mobile.Dialog');
    const Confirm = require('Confirm');
    
    //针对移动端的差异化配置。
    Object.assign(Confirm.defaults, {
        Dialog,
    });
    
    module.exports = Confirm;
    
});