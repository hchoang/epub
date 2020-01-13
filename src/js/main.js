import electron, { BrowserWindow } from 'electron'

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./src/index.html');

    win.on('closed', () => {
        win = null;
        aboutWin = null;
    })
}