/**
* src: @definejs/scroller/modules/Scroller/Pullup/Loading.js
* pkg: @definejs/scroller@1.0.1
*/
define('Scroller/Pullup/Loading', function (require, module, exports) { 
    const Loading = require('Loading');
    
    module.exports = {
        /**
        * 
        *   options = {
        *       container: Element,
        *       bottom: 10,
        *   };
        */
        create(options) {
            let loading = new Loading({
                'container': options.container,
                'text': options.text,
                'presetting': 'scroller.pullup',
                'z-index': 9999,
    
                'style': {
                    'bottom': options.bottom,
                },
            });
    
            return loading;
        },
    };
    
    
});