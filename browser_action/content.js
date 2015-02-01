(function () {
    'use strict';

    var h1 = document.getElementsByTagName('h1')[0];
    if (h1) {
        chrome.runtime.sendMessage({
            firstHeading: h1.textContent
        }, function (response) {
            console.log(response.status);
        });
    }

    var messagePort = chrome.runtime.connect({ name: 'headings' });

    var h2s = Array.prototype.slice.call(document.getElementsByTagName('h2'));
    h2s.forEach(function (h2) {
        messagePort.postMessage({ h2: h2.textContent });
    });

    messagePort.onMessage.addListener(function (message) {
        console.log(message.status);
    });
}());
