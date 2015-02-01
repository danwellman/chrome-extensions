(function () {
    'use strict';

    var backgroundpage = chrome.extension.getBackgroundPage();

    document.querySelector('button').addEventListener('click', function () {
        backgroundpage.handleButtonClick();
    });

    var title = chrome.i18n.getMessage("popupTitle");
    document.getElementsByTagName('h1')[0].textContent = title;
    console.log(chrome.i18n.getMessage('@@extension_id'));
    console.log(chrome.i18n.getMessage('@@ui_locale'));

    eval('console.log("bad");');
    console.log(window.$);

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.responseText);
    };
    xhr.open('GET', 'http://numbersapi.com/random');
    xhr.send();
}());
