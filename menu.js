const { app, Menu, BrowserWindow } = require('electron')


const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    {
        label: 'Home',
        click: async () => {
            const { mainWindow } = require('./main.js')
            mainWindow.loadFile("index.html")
        }
    },
    {
        label: 'Login',
        click: function(){
            const { mainWindow} = require('./main.js')
            mainWindow.loadFile("login.html")
          }
        
    },
    
]

const menu = Menu.buildFromTemplate(template)


Menu.setApplicationMenu(menu)




