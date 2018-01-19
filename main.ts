import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWin: Electron.BrowserWindow | null;

function createWin() {
    mainWin = new BrowserWindow({
        width: 660,
        height: 400,
        minHeight: 350,
        minWidth: 600,
        title: '你猜',
        show: false,
    });
    const webContent = mainWin.webContents;

    // mainWin.once('ready-to-show', () => {
    //     mainWin.show();
    // });
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
        mainWin.loadURL('http://127.0.0.1:4200');
        mainWin.webContents.openDevTools();
    } else {
        mainWin.loadURL(`file://${path.resolve(__dirname, './build/index.html')}`);
    }

    mainWin.on('closed', () => {
        mainWin = null;
    });
}

app.on('ready', createWin);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWin === null) {
        createWin();
    }
});
