//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

//Este ejercicio es el que más me ha costado hasta ahora, porque no se me ocurría cómo simplificar el código, siento que hay muchas repeticiones y variables que se pueden simplificar. La única forma en la que me funcionaba era creando muchos contadores y agregarlos en un array que se llama apariciones. Al final he usado dos arrays, uno para los resultados y otro para las apariciones de cada uno de esos resultados.

const resultados = []
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let contador7 = 0;
let contador8 = 0;
let contador9 = 0;
let contador10 = 0;
let contador11 = 0;
let contador12 = 0;

for (i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    if (suma === 2) {
        contador2++
    } else if (suma === 3) {
        contador3++
    }
    else if (suma === 4) {
        contador4++
    }
    else if (suma === 5) {
        contador5++
    }
    else if (suma === 6) {
        contador6++
    }
    else if (suma === 7) {
        contador7++
    }
    else if (suma === 8) {
        contador8++
    }
    else if (suma === 9) {
        contador9++
    }
    else if (suma === 10) {
        contador10++
    }
    else if (suma === 11) {
        contador11++
    }
    else if (suma === 12) {
        contador12++
    }
    resultados.push(suma);
}
const apariciones = [contador2, contador3, contador4, contador5, contador6, contador7, contador8, contador9, contador10, contador11, contador12];
console.log(resultados)
console.log(apariciones)

document.write(`<table><tbody>`);
document.write(`<tr>`);
document.write(`<th>Suma</th>`)
document.write(`<th>Apariciones</th>`)
document.write(`<tr>`);
for (let indiceFilas = 0; indiceFilas < apariciones.length; indiceFilas++) {
    document.write(`<tr>`);
    for (let indiceColumnasSuma = 0; indiceColumnasSuma < 1; indiceColumnasSuma++) {
        document.write(`<td>${indiceFilas + 2}</td>`);
        for (let indiceColumnasApariciones = 0; indiceColumnasApariciones < 1; indiceColumnasApariciones++) {
            document.write(`<td>${apariciones[indiceFilas]}</td>`);
        }
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);
