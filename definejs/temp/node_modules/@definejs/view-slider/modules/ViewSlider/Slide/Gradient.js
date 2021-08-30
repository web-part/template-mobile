
/**
* 斜率。
*/
module.exports = {
    /**
    * 计算滑动的绝对斜率。
    * 不管向上滑还是向下滑，都取正值，以确保斜率为正。
    */
    get(y0, y1, dx) {
        let dy = y0 - y1;
        let k = dy / dx;

        return Math.abs(k);
    },
};