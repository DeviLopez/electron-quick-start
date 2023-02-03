const { ipcRenderer } = require('electron');
ipcRenderer.send("canalapi", 'ok');



ipcRenderer.on('canalapi2', (e, args) => {
    const obj = JSON.parse(args);
    console.log(obj.results)


    var escriure = "";
    for (let i = 0; i < obj.results.length; i++) {
        console.log(obj.results[i].backdrop_path)
        let imgg;
        if (obj.results[i].backdrop_path != null) {

            imgg = 'https://image.tmdb.org/t/p/w500' + obj.results[i].backdrop_path;
        }
        else {
            imgg = 'https://i.stack.imgur.com/GNhxO.png';
        }


        escriure = escriure + "<div class='town-card'> <img src=" + imgg + "> <h2>" + obj.results[i].title + "</h2> <p>Release Date: " + obj.results[i].release_date + "</p><p>Popularity: " + obj.results[i].popularity + "</p><p>id: " + obj.results[i].id + "</p></div>"



    }
    document.getElementById("insertar").innerHTML = escriure
});