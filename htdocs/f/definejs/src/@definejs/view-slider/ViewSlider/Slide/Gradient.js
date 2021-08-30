/**
* src: @definejs/view-slider/modules/ViewSlider/Slide/Gradient.js
* pkg: @definejs/view-slider@1.0.0
*/
define('ViewSlider/Slide/Gradient', function (require, module, exports) { 
    
    /**
    * б�ʡ�
    */
    module.exports = {
        /**
        * ���㻬���ľ���б�ʡ�
        * �������ϻ��������»�����ȡ��ֵ����ȷ��б��Ϊ����
        */
        get(y0, y1, dx) {
            let dy = y0 - y1;
            let k = dy / dx;
    
            return Math.abs(k);
        },
    };
});