//Ejercicio 1A: Encontrar el número mayor en un arreglo:: Escribe una función que tome un arreglo de números como argumento y devuelva el número más grande en el arreglo.

function encontrarMayor(arreglo) {
    document.write(`El número mayor del arreglo es: ${Math.max(...arreglo)}`);
}

const numeros = [];
while (confirm("¿Desea ingresar un número?")) {
    const numero = parseInt(prompt("Ingrese un número"));
    numeros.push(numero);
}
console.log(numeros)

encontrarMayor(numeros);
