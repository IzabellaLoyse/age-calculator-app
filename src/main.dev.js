const { app, BrowserWindow } = require("electron");

const url = require("url");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    icon: path.join(__dirname, "src/favicon.ico"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  win.loadURL("http://localhost:4200");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
