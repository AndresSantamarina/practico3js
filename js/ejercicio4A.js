//Ejercicio 4A: Generar números primos: Escribe una función que tome un número entero como argumento y devuelva un arreglo de todos los números primos menores o iguales a ese número.
function identificarPrimos(nro) {
    if (nro < 2) {
        return false
    }
    for (let i = 2; i < nro; i++) {
        if (nro % i === 0) {
            return false
        }
    }
    return true
}

function mostrarPrimos(numero) {
    const primos = [];

    for (let i = 2; i <= numero; i++) {
        if (identificarPrimos(i)) primos.push(i)
    }
    document.write(primos)
}

const numero = parseInt(prompt("Ingrese un número"));
mostrarPrimos(numero);