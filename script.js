function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 13) {
        document.body.style.background = "#f6b457"
        img.src =  './imagens/manha.png'
    } 

    else if (hora > 12 && hora < 18){
        document.body.style.background = '#e49290'
        img.src = './imagens/tarde.png'
    }

    else {
        document.body.style.background = '#1a396d'
        img.src = './imagens/noite.png'
    }

}
