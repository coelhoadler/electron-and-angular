const { app, BrowserWindow } = require("electron");

let win = null;

app.on('ready', function() {
    win = new BrowserWindow({
         width : 800
        ,height: 600
    });

    win.loadURL("http://localhost:4200");
    win.webContents.openDevTools();

    win.on('closed', function() {
        win = null;
    });

});

app.on('active', function() {
    if (win === null) {
        // createWindow();
    }
});

app.on('window-all-closed', function() {
    if (process.platform != "darwin") {
        app.quit();
    }
});