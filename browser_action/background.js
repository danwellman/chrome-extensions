function handleButtonClick() {
    chrome.tabs.create({
        index: 0,
        url: 'http://google.co.uk'
    }, function (tab) {
        console.log(tab.url);
    });
}

chrome.runtime.onMessage.addListener(function (message, sender, response) {
    console.log(message, sender);
    response({ status: 'success!' });
});

chrome.runtime.onConnect.addListener(function (messagePort) {
    messagePort.onMessage.addListener(function (message) {
        console.log(message.h2);
        messagePort.postMessage({ status: 'received!' });
    });
});
