

/**
* 关于视图。
*/
define.view('/About', function (require, module, view) {
    
    const List = module.require('List');


    /**
    * 初始化时触发。
    * 即首次渲染前触发，只会触发一次。
    * 适合用来绑定事件等只需要执行一次的操作。
    */
    view.on('init', function () {

        view.$on('click', {
            '[data-cmd]': function () {
                let cmd = this.getAttribute('data-cmd');

                view.fire(cmd);
            },
        });

        List.on({
            'item': function (item, index) {
                definejs.alert(item)
            },
        });

       
    });



    /**
    * 渲染。
    * 外面每次调 render() 时触发。
    */
    view.on('render', function (list) {

        List.render(list);


    });




    view.on('show', function () {
        
    });

    /**
    * 需要对外额外增加暴露的成员。
    */
    return {
        
    };



});