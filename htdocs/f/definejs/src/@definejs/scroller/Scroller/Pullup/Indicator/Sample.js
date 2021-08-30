/**
* src: @definejs/scroller/modules/Scroller/Pullup/Indicator/Sample.js
* pkg: @definejs/scroller@1.0.1
*/
define('Scroller/Pullup/Indicator/Sample', function (require, module, exports) { 
    
    module.exports = `
        <div id="{id}" 
            class="Scroller-Pullup-Indicator" 
            style="display: none; transform: translateY({translateY}px); ">
            上拉加载更多
        </div>
    `;
});