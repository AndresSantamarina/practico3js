/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

function calcularPerimetro(ladoA, ladoB) {
    const perimetro = 2 * (ladoA + ladoB)
    document.write(`El perímetro del rectángulo es de ${perimetro}`)
}

const ladoA = parseInt(prompt("Ingrese el valor del primer lado"))
const ladoB = parseInt(prompt("Ingrese el valor del segundo lado"))

calcularPerimetro(ladoA, ladoB)