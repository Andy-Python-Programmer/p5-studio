const customTitlebar = require('custom-electron-titlebar');
const { Menu, MenuItem } = require("electron").remote;

const menu = new Menu();
menu.append(new MenuItem({
    label: 'File',
    submenu: [
        {
            label: 'Save',
            click: () => console.log('Save')
        },
    ]
}));

let title = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#fbfbfb'),
    shadow: false,
});

title.updateTitle("P5 Studio IDE");
title.updateMenu(menu);