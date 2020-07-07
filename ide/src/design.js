const { remote } = require('electron');

var quit = document.querySelector(".quit").onclick = function () {
    var window = remote.getCurrentWindow();
    window.close();
};
var min = document.querySelector(".min").onclick = function () {
    remote.BrowserWindow.getFocusedWindow().minimize();
};
var max = document.querySelector(".max").onclick = function () {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();          
    } else {
        window.unmaximize();
    }
};