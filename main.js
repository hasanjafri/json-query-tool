// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 670,
    icon: `file://${__dirname}/dist/json-query-tool/favicon.ico`
  });

  win.removeMenu();

  win.loadURL(`file://${__dirname}/dist/json-query-tool/index.html`);
  win.webContents.openDevTools();

  // Event when the window is closed.
  win.on('closed', function () {
    win = null;
  });
}

// Create window on electron initialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});
