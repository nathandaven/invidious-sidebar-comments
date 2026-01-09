// ==UserScript==
// @name         Invidious Sidebar Comments
// @namespace    http://tampermonkey.net/
// @version      2026-01-09
// @description  try to take over the world!
// @author       nathandaven
// @match        https://127.0.0.1/watch*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function moveComments() {
        const comments = document.querySelector('#comments');
        const target = document.querySelector('div.pure-g');

        if (!comments || !target) return false;


        target.appendChild(comments);
        return true;
    }

    // Try immediately
    if (moveComments()) return;

    // Watch for dynamically inserted content
    const observer = new MutationObserver(() => {
        if (moveComments()) {
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
