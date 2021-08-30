
const Dialog = require('@definejs/mobile-dialog');
const Confirm = require('@definejs/confirm');

//针对移动端的差异化配置。
Object.assign(Confirm.defaults, {
    Dialog,
});

module.exports = Confirm;
