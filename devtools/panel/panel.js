(function () {
    'use strict';

    var devtoolsPort = chrome.runtime.connect({
        name: 'devtools'
    });

    document.addEventListener('click', function (event) {
        devtoolsPort.postMessage({
            greeting: 'Hello from the devtools panel!'
        });
    });
}());
