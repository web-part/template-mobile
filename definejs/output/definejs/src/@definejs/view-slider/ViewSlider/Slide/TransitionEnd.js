/**
* src: @definejs/view-slider/modules/ViewSlider/Slide/TransitionEnd.js
* pkg: @definejs/view-slider@1.0.0
*/
define('ViewSlider/Slide/TransitionEnd', function (require, module, exports) { 
    
    /**
    * 动画结束。
    */
    const $String = require('String');
    const TransitionEnd = require('TransitionEnd');
    
    
    const none = {
        'transform': `translateX(0)`,
        'transition': `none`,           //关闭动画。
        '-webkit-transition': `none`,   //兼容低版本的。
    };
    
    
    module.exports = exports = {
        /**
        * 
        */
        bind(current, meta) {
            let sid = meta.sid;
    
            //已绑定了。
            if (sid) {
                return sid;
            }
    
    
            sid = $String.randomId('ViewSlider/Slide/TransitionEnd.bind.', 6);
    
            //绑定动画结束事件。
            //在同一个模块里，同一个元素只会实际绑定一次。
            TransitionEnd.bind(current, sid, function (event) {
                meta.sid = '';          //此轮执行完成，已失效，清空，下次重新绑定。
                meta.masker.hide();     //动画结束，隐藏中间的遮罩层。
                meta.masker2.hide();    //动画结束，隐藏顶部的遮罩层。
    
    
                if (meta.aborted) { //滑动后退给中止了（如因为滑动的距离不够大）。
                    meta.sid = exports.bind(current, meta); //重新绑定。
                    meta.target.hide(); //在滑动过程中已给显示出来了，这里要重新隐藏。
                    meta.abort();
                    meta.done(meta.aborted);
                }
                else {
                    //滑动后退生效了。
                    current.$.removeClass('Shadow');
                    current.hide();         //要触发 hide 事件。
                    current.$.css(none);    //重新回到主屏幕位置。 以支持兄弟模块 `Jump` 的无动画版本。
    
                    meta.back();
                    meta.done(meta.aborted);
                }
    
            });
    
    
            return sid;
        },
    
        /**
        * 
        */
        active(current, sid) {
            TransitionEnd.active(current, sid);
        },
    };
});