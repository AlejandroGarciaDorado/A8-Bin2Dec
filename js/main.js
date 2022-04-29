function parrafos() {
    var infonum = document.getElementById('infonum')

    var infonum2 = document.getElementById('infonum2')
    var numero = document.getElementById('numero').value
    var calculando = document.getElementById('calculando')
    calculando.innerHTML = parseInt(numero, 2);
    var ultimodigito = numero.charAt(numero.length - 1)
    if (infonum == 0 || 1) {}
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2.innerHTML = 'Here is your decimal'
    } else {
        calculando.innerHTML = 'Waiting for a valid binary number...'
    }

}