
const Jump = require('./ViewSlider/Jump');
const Slide = require('./ViewSlider/Slide');

const defaults = require('./ViewSlider.defaults');


Jump.init(defaults);
Slide.init(defaults);


/**
* 实现两个视图间跳转的滑动效果和手势滑动返回。
*/
module.exports = {
    /**
    * 默认配置。
    * 注意，外界只能扩展 defaults，而不能重写成另一个对象。
    */
    defaults,

    /**
    * 开始两个视图间跳转的后退动画。
    * 可选参数:
    *   options = {
    *       left: 0.6,      //下层视图隐藏在左边的宽度的百分比。
    *       time: 400,      //动画时间，单位 ms。
    *   };
    */
    back: Jump.back,

    /**
    * 开始两个视图间跳转的前进动画。
    * 可选参数:
    *   options = {
    *       left: 0.6,      //下层视图隐藏在左边的宽度的百分比。
    *       time: 400,      //动画时间，单位 ms。
    *   };
    */
    forward: Jump.forward,


    /**
    * 绑定两个视图间的滑动返回手势支持。
    * 或者设定某个视图是否启用滑动返回。
    * 已重载 slide(current, target, options);  //绑定两个视图间的滑动返回手势支持。
    * 已重载 slide(current, enabled);          //设定某个视图是否启用滑动返回。
    */
    slide(current, enabled) {
        if (typeof enabled == 'boolean') {
            Slide.enable(current, enabled);
        }
        else {
            Slide.bind(...arguments);
        }
    },


};