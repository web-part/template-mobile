/**
* src: @definejs/mobile-view/index.js
* pkg: @definejs/mobile-view@1.0.0
*/
define('Mobile.View', function (require, module, exports) { 
    
    const ViewSlider = require('ViewSlider');
    const View = require('View');
    
    Object.assign(View.defaults, {
        ViewSlider,
        fullscreen: true,
    });
    
    module.exports = View;
    
    
    
    
    
});