const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win = null;

function createNewWindow () {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, 'images/email.png')
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // win.webContents.openDevTools();

  app.on('closed', () => win = null);
}

app.on('ready', createNewWindow);

app.on('window-all-closed', () => {
  if (process.plataform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (wind === null) {
    createNewWindow();
  }
});
