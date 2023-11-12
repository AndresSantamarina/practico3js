/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

const ciudades = [];
let ciudad = '';

do {
    ciudad = prompt('Ingrese una ciudad')
    ciudades.push(ciudad);
    console.log(ciudades)
    if(ciudad === ''){
        alert('Ingrese una ciudad válida')
        //acá hago un pop para resolver el problema de que al apretar aceptar se llene el array de cadenas vacias
        ciudades.pop()
    }
} while (ciudad != null)

//Si no uso el pop, el ultimo elemento del array es un null, hay otra forma mejor de corregir eso?
ciudades.pop()

document.write(`<p>El arrego de ciudades tiene ${ciudades.length} elemento/s.</p>`)
document.write('<ul>')
document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`)
document.write(`<li>Elemento 3er posición: ${ciudades[2]}</li>`)
document.write(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`)
document.write('</ul>')

ciudades.push('París')
document.write('<ul>')
document.write(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`)
document.write('</ul>')

ciudades.splice(1, 0, 'Barcelona')
document.write("<h2>Arreglo de ciudades</h2>");
document.write(`<ul>`);
for (j = 0; j < ciudades.length; j++) {
    document.write(`<li>Elemento: ${ciudades[j]}</li>`);
}
document.write('</ul>');