
define.panel('/About/List', function (require, module, panel) {
    const Scroller = require('@definejs/scroller');

    let meta = {
        list: [],
    };

    let scroller = null;

    //初始阶段适合用来绑定事件。
    panel.on('init', function () {

        scroller = new Scroller({
            container: panel.$,
            top: '78px',
            bottom: '0.56rem',
        });

        panel.set('template', panel.$.find('ul'));

        panel.template(function (item, index) {
            return {
                'index': index,
                'order': index + 1,
                'name': item.name,
                'value': item.value * 2,
            };
        });

        panel.$on('click', 'li[data-index]', function () {
            let index = +this.dataset['index'];
            let item = meta.list[index];

            panel.fire('item', [item, index]);
        });
    });

    //渲染。
    panel.on('render', function (list) {
        meta.list = list;
        panel.fill(list);

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