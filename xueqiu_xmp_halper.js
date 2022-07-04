// ==UserScript==
// @name        Xueqiu Xmp Helper
// @namespace   https://github.com/yangzhenze/userjs/xueqiu_xmp_helper
// @description 将雪球上的 xmp url 转化为可操作组件
// @author      yangzhenze
// @version     20220704.1
// @match       http://xueqiu.com/*
// @match       https://xueqiu.com/*
// @license     MIT License
// @require     https://cdn.jsdelivr.net/npm/domo@0.5.9/lib/domo.js
// ==/UserScript==

var allAElement = document.getElementsByTagName("a");
for (var i = 0; i < allAElement.length; i++) {
  var aElement = allAElement[i];
  if (aElement.href.includes("xmp-test.titanplus.cn")) {
    var iframe = IFRAME({ src: aElement.href, width: "100%", height: "500" });
    aElement.parentNode.insertBefore(iframe, aElement.nextSibling);
    var br = BR();
    aElement.parentNode.insertBefore(br, iframe);
  }
}
