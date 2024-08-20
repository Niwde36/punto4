function invertirPalabra() {
    const palabra = document.getElementById('palabra').value;
    const palabraAlReves = palabra.split('').reverse().join('');
    document.getElementById('resultado1').innerHTML = palabraAlReves;
}

function numerosPares() {
    const numeros = document.getElementById('numeros').value.split(',');
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    document.getElementById('resultado2').innerHTML = numerosPares.join(', ');
}

function sumaIntervalo() {
    const intervalo = document.getElementById('intervalo').value.split(',');
    const inicio = parseInt(intervalo[0]);
    const fin = parseInt(intervalo[1]);
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    document.getElementById('resultado3').innerHTML = suma;
}