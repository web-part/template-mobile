/**
* src: @definejs/scroller/modules/Scroller/Pulldown/Indicator/Sample.js
* pkg: @definejs/scroller@1.0.1
*/
define('Scroller/Pulldown/Indicator/Sample', function (require, module, exports) { 
    
    
    module.exports = `
        <div id="{id}" 
            class="Scroller-Pulldown-Indicator" 
            style="display: none; transform: translateY({translateY}px);">
            下拉刷新
        </div>
    `;
});