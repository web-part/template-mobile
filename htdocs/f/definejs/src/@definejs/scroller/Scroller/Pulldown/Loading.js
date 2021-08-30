/**
* src: @definejs/scroller/modules/Scroller/Pulldown/Loading.js
* pkg: @definejs/scroller@1.0.1
*/
define('Scroller/Pulldown/Loading', function (require, module, exports) { 
    const Loading = require('Loading');
    
    module.exports = {
        /**
        * ����һ������ָʾ����
        *   options = {
        *       container: Element,     //Scroller �����ڵ㡣
        *       text: '',               //Ҫ��ʾ���ı����� `������...`��
        *       top: 10,                //��ʽ `top` ֵ��
        *   };
        */
        create(options) {
            let loading = new Loading({
                'container': options.container,
                'text': options.text,
                'presetting': 'scroller.pulldown',
                'z-index': 9999,
                'style': {
                    'top': options.top,
                },
            });
    
            return loading;
        },
    };
    
    
    
});