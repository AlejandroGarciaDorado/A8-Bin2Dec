function parrafos() {
    var infonum = document.getElementById('valor1')
    var infonum2 = document.getElementById('valor2')
    var numero = document.getElementById('numeros').value
    var calculando = document.getElementById('calculando')
    calculando.innerHTML = parseInt(numero, 2);
    var ultimodigito = numero.charAt(numero.length - 1)
    if (numero == '') {
        calculando.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2.innerHTML = 'Here is your decimal'
        infonum.innerHTML = ''
    } else {
        calculando.innerHTML = '&#129335 Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (ultimodigito == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }
}