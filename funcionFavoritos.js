(function favoritos() {
    let listFavoritos = localStorage.getItem("favoritos");
    listFavoritos = JSON.parse(listFavoritos); //convertimos el string en unarray
    console.log(listFavoritos);
    for (let position of listFavoritos) {
        document.querySelector("#listFavorit").innerHTML += `<p>${position}</p>`
        console.log(position);
    }


})()