

const Dialog = require('@definejs/mobile-dialog');
const Alert = require('@definejs/alert');

//针对移动端的差异化配置。
Object.assign(Alert.defaults, {
    Dialog,
    width: '80%',
});

module.exports = Alert;