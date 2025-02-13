function isWeixinBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}

function showWeixinTip() {
    var winHeight = $(window).height();
    $(".weixin-tip").css("height", winHeight);
    $(".weixin-tip").show();
}

$(document).ready(function () {
    if (isWeixinBrowser()) {
        // 如果是在微信浏览器中打开，则显示提示框
        showWeixinTip();
    } else {
        // 否则，可以在这里添加其他逻辑或直接允许用户正常浏览
    }
});