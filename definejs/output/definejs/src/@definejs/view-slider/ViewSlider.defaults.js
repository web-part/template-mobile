/**
* src: @definejs/view-slider/modules/ViewSlider.defaults.js
* pkg: @definejs/view-slider@1.0.0
*/
define('ViewSlider.defaults', function (require, module, exports) { 
    
    /**
    * ViewSlider 模块的默认配置
    * @name ViewSlider.defaults
    */
    module.exports = {
        left: 0.6,      //下层视图隐藏在左边的宽度的百分比。
        right: 0.25,    //向右滑动的距离超过该值并松开滑动后才会触发滑动后退。
        time: 400,      //动画时间，单位 ms。
        mask: 0.1,      //遮罩层的不透明度。
        gradient: 0.6,  //滑动生效允许的最大斜率。
    };
});