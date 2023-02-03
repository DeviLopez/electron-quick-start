const {ipcRenderer} = require('electron');

const nombre = document.getElementById('codef')

ipcRenderer.on('datos', (e, data) => { 
    var selector = document.getElementById('years')
    var contenidooo
        for (var key in data) {
            var obj = data[key];
           contenidooo += '<option value="' + obj.year + '">' + obj.year + '</option>'
        }
        selector.innerHTML = contenidooo;
  })
