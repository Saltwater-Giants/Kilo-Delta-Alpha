const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
// if(isDev) {require('electron-reload');}

let mainWindow;

Menu.setApplicationMenu(null);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1201,
    height: 760,
    minWidth: 700,
    minHeight: 800,
    icon: isDev
      ? path.join(__dirname, '../assets/icon.png')
      : `file://${path.join(__dirname, '../assets/icon.png')}`,
    webPreferences: {
      webSecurity: false
    }
  });
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
