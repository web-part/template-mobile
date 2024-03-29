/**
* src: @definejs/mobile-app/index.js
* pkg: @definejs/mobile-app@1.0.0
*/
define('Mobile.App', function (require, module, exports) { 
    const ViewSlider = require('ViewSlider');
    const App = require('App');
    
    //针对移动端的差异化配置。
    Object.assign(App.defaults, {
    
        ViewSlider,
    
        /**
        * 针对视图的配置。
        */
        view: {
            /**
            * 是否根据需要预加载视图的分包资源。
            * 如果使用了分包的模式和滑动返回功能，为了更好的用户体验，会提前加载历史路径中所有的视图。
            * 如历史路径为 A -> B -> C -> D，当前视图为 D，如果在视图 D 时刷新了浏览器。
            * 为了提供滑动返回的手势支持，则会预先并发加载 A、B、C 三个视图的分包资源。
            * 加载完成的顺序不能保证，因为是并发加载。
            * 如果使用了非分包模式即普通的 SPA 模式，则此选项无效从而可忽略。
            * 通过输入地址栏的地址，或刷新浏览器时触发。
            * 根据缓存到的视图信息，按时间戳进行排序，重建滑动返回顺序的手势支持。
            */
            preload: true,
            /**
            * 动态加载视图时，视图 html 所要 append 到的容器节点。
            * 在使用了分包模式下有效。
            */
            container: 'body',
            /**
            * 是否启用滑动返回手势支持。
            */
            slide: true,
            /**
            * 视图间的前进/后退是否使用动画效果。
            */
            animate: true,
        },
    });
    
    module.exports = App;
});