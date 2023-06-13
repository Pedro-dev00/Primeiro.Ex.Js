function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12){
        //Bom Dia!!
        img.src = "manha.png"
        document.body.style.background = '#FDB163'
    } else if ( hora >= 12 && hora < 18){
        //Boa Tarde!!
        img.src = "tarde.png"
        document.body.style.background = '#804F53'
    } else {
        //Boa Noite!!
        img.src = "noite.png"
        document.body.style.background = '#513D62'
    }
}
