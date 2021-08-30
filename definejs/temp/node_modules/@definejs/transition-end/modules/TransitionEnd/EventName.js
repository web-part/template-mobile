
/**
* 针对各浏览器的动画结束事件名称。
*/

//针对各浏览器的动画结束事件名称。
const prop$name = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
};


function get() {
    let div = document.createElement('div');

    let prop = Object.keys(prop$name).find(function (prop) {
        return div.style[prop] !== undefined;
    });

    return prop$name[prop];
}


let name = '';



module.exports = {

    /**
    * 
    */
    get() {

        if (!name) {
            name = get();
        }

        return name;

    },

};