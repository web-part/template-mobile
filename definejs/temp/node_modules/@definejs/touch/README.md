# Touch.js

针对移动端的 `touch` 事件，用来替换到 PC 端的 `click` 事件。
扩展 jQuery 原型，使其实例上具有此方法。

``` javascript

const $ = require('@definejs/touch');

$.touch('button', function() {
    console.log('touched');
});


```