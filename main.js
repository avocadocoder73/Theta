const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const options = {color: '#313131',
    symbolColor: 'white',
    height: "30px",
   }
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./public/THETA3.png",
    titleBarStyle: 'hiddenInset',
    titleBarOverlay: true    
  })

 win.setTitleBarOverlay(options)
  win.loadURL("http://localhost:3000")

}

app.whenReady().then(() => {
  createWindow()
})