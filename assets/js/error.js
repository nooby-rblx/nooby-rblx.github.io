function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const emsgsTitle = ["400","401","403","404","406","410","414","415","417","418","429","500","502","503"];

var emsgtemp = " Error Occured!";

var ecodeP = getParam('ecode');
var eTitle = document.getElementById("e-title");
var eDesc = document.getElementById("e-description");

if (eTitle) and (eDesc); {
    if (ecodeP == null) {
        console.log("nothing");
        eTitle.innerText("There is no Error");
        eDesc.innerText("Error not found");
    } else if (ecodep == null){}
}