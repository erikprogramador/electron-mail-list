const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win = null;

function createNewWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 800
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

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
