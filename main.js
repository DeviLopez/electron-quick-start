// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
require('./menu.js')
let mainWindow
let token
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
/*
requestAll = function() {
  const { net } = require('electron')
  const request = net.request('https://picsum.photos/seed/picsum/300/300')
  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    mainWindow.webContents.send('datos', `${JSON.stringify(response.headers)}`);
   
    response.on('end', () => {
      console.log('No more data in response.')
    })
  })
  request.end()
}
*/
ipcMain.on('canalapi', (e, args) => {
  const { net } = require('electron')
  const request = net.request('https://api.themoviedb.org/3/movie/popular?api_key=9802efd10431cbbbac66d5135f8b83a7&language=en-US&page=1')
  request.on('response', (response) => {
      response.on('data', (chunk) => {


          e.sender.send("canalapi2", `${chunk}`)
      })
      response.on('end', () => {
          console.log('No more data in response.')
      })

  })
  request.end()
}
)


app.whenReady().then(() => {
  createWindow()
  exports.mainWindow = mainWindow
  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

peticion = function() {

}

