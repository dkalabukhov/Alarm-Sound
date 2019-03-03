// ==UserScript==
// @name         Sound Alarm
// @description  Plays a sound when the vote starts. The voting tab has to be opened.
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://www.chess.com/computer-chess-championship
// ==/UserScript==

(function() {
    'use strict';

    function alarm_if_vote() {
        var myEl = document.getElementsByClassName('cast-vote-icon-cursor-pointer cast-vote-icon-cast-vote-icon-wrapper');
        if (myEl.length > 0) {
            var audio = new Audio('https://myzcloud.me/song/dl/636871232752967181/44a2631d3552b8006673e2c99709b4c6/40430');
            audio.play();
            return;
        }
        setTimeout(alarm_if_vote, 1000);
    }
    setTimeout(alarm_if_vote, 1000);
})();
