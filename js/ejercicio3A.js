//Ejercicio 3A: Convertir grados Celsius a Fahrenheit: Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit.

function conversion(grados) {
    const gradosF = (grados * (9 / 5)) + 32;
    document.write(`El equivalente en grados Fahrenheit es de ${gradosF}`)
}

const gradosCelcius = parseInt(prompt("Ingrese una temperatura en Celsius"));
conversion(gradosCelcius);
