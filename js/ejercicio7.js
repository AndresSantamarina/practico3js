//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function multiplicar(numero) {
    document.write(`<table><tbody>`);
    document.write(`<tr>`);
    document.write(`<th>Multiplicador</th>`)
    document.write(`<th>Resultados</th>`)
    document.write(`<tr>`);
    for (let indiceFilas = 0; indiceFilas < 10; indiceFilas++) {
        document.write(`<tr>`);
        for (let indiceColumnasMultiplicador = 0; indiceColumnasMultiplicador < 1; indiceColumnasMultiplicador++) {
            document.write(`<td>${indiceFilas + 1}</td>`);
            for (let indiceColumnasResultados = 0; indiceColumnasResultados < 1; indiceColumnasResultados++) {
                document.write(`<td>${numero * (indiceFilas + 1)}</td>`);
            }
        }
        document.write(`</tr>`);
    }
    document.write(`</tbody></table>`);
}

multiplicar(parseInt(prompt("Ingrese un número")));