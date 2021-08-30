
define.panel('/Home/Main', function (require, module, panel) {
    const Scroller = require('@definejs/scroller');

    let scroller = null;


    //初始阶段适合用来绑定事件。
    panel.on('init', function () { 
        scroller = new Scroller({
            container: panel.$,
            top: '78px',
            bottom: '0.56rem',
        });
    });

    //渲染。
    panel.on('render', function (data) { 
        scroller.render();

    });

    //显示时触发。
    panel.on('show', function () {

    });

    //隐藏时触发。
    panel.on('hide', function () { 

    });

    //需要对外额外增加的成员。
    return {

    };

});
