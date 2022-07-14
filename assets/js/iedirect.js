function isIe() {
    var ua = navigator.userAgent;
    return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
}

if (isIe()) {
    window.location.pathname('/assets/msgp/no-ie.html');
}else {
    console.log("IE not");
}