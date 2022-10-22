// ==UserScript==
// @name         github download
// @namespace    https://github.com/CPTJK
// @version      0.1
// @description  auto download github resources
// @author       CPTJK
// @match        https://github.com/crazymage2020/zhoujielun*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sankuai.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  // Your code here...
  console.log("here we run the tampermonkey script");
  const url = location.href;
  const stage2Exp = /https:\/\/github.com\/crazymage2020\/zhoujielun\/tree\/main\/+/
  const stage3Exp = /https:\/\/github.com\/crazymage2020\/zhoujielun\/tree\/main\/+/
  if (url === "https://github.com/crazymage2020/zhoujielun") {
    const anchors = document.querySelectorAll(".Box-row .js-navigation-open");
    const urls = [];
    anchors.forEach((anchor) => {
      setTimeout(() => {
        // window.open(anchor.href);
      }, 1000);
    });
  } else if (stage2Exp.test(url)) {
    console.log("in second stage");
    const anchors = document.querySelectorAll(".Box-row .js-navigation-open");
    anchors.forEach((anchor) => {
      const innerText = anchor.innerText;
      const reg = /\.mp3$/;
      if (reg.test(innerText)) {
        setTimeout(() => {
          window.open(anchor.href);
        }, 2000);
      }
    });
  } else {
    console.log("in stage 3");
    setTimeout(() => {
      const rawUrl = document.querySelector("#raw-url");
      console.log(rawUrl.innerText === "Download");
      if (rawUrl.innerText === "Download") {
        rawUrl.click();
      }
    }, 2000);
  }
})();
