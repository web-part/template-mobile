/**
* src: @definejs/transition-end/modules/TransitionEnd/Data.js
* pkg: @definejs/transition-end@1.0.0
*/
define('TransitionEnd/Data', function (require, module, exports) { 
    
    /**
    * 自定义数据。
    */
    
    const view$data = new Map();
    
    module.exports = {
    
        /**
        * 获取指定视图模块关联的数据。
        * 如果该视图模块尚未存在任何数据，则先创建并分配一个 {} 作为数据容器，并返回它。
        */
        get(view) {
            let data = view$data.get(view);
    
            //尚未存在，则分配一个。
            if (!data) {
                data = {
                    'binded': false,
                    'sid': '',
                    'sid$fn': {},
                };
    
                view$data.set(view, data);
            }
    
            return data;
    
        },
    
    };
});