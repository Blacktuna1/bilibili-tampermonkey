// ==UserScript==
// @name         关闭bilibili插件提醒
// @namespace    bilibili
// @version      1.0
// @description  关闭B站上的插件警告条幅
// @author       Joey Gambler
// @match        *://www.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.adblock-tips img');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    // 设置检测时间间隔
    var timer = setInterval(skipAd, 1000); // 1000毫秒 = 1秒
})();