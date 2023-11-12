//Ejercicio 2A: Filtrar números pares en un arreglo: Escribe una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los números pares del arreglo original.

function filtrarPares (arreglo){
    const arregloPares = [];
    for (i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 === 0){
            arregloPares.push(arreglo[i])
        }
    }
    document.write("<h3>Los número pares son:</h3>")
    document.write(`<ul>`)
    for(j = 0; j< arregloPares.length; j++){
        document.write(`<li>${arregloPares[j]}</li>`)
    }
    document.write(`</ul>`)
}

const numeros = [];
for (i = 0; i < 5; i++){
    let numero = parseInt(prompt("Ingrese un número (5 en total)"))
    numeros.push(numero)
}

filtrarPares(numeros);