/**
* src: @definejs/scroller/modules/Scroller/Pulldown/Indicator.js
* pkg: @definejs/scroller@1.0.1
*/
define('Scroller/Pulldown/Indicator', function (require, module, exports) { 
    const $ = require('jquery');
    const $String = require('String');
    const Panel = require('Panel');
    const Sample = module.require('Sample');
    
    module.exports = {
        /**
        * 创建一个Panel 实例指示器。
        *   options = {
        *       container: Element,     //Scroller 容器节点。
        *       translateY: -40,        //隐藏在顶部的位置。
        *   };
        */
        create(options) {
            let id = $String.random();
    
            let html = $String.format(Sample, {
                'id': id,
                'translateY': options.translateY,
            });
    
            $(options.container).append(html);
    
            let panel = new Panel(`#${id}`);
    
            return panel;
        },
    };
    
    
    
});