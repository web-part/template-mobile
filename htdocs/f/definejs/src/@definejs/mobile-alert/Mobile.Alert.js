/**
* src: @definejs/mobile-alert/index.js
* pkg: @definejs/mobile-alert@1.0.0
*/
define('Mobile.Alert', function (require, module, exports) { 
    
    
    const Dialog = require('Mobile.Dialog');
    const Alert = require('Alert');
    
    //针对移动端的差异化配置。
    Object.assign(Alert.defaults, {
        Dialog,
        width: '80%',
    });
    
    module.exports = Alert;
});