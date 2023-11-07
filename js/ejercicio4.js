//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function calcularParImpar (numero){
    const resultado = numero % 2
    if (resultado === 0){
        document.write("El número es par")
    }else{
        document.write("El número es impar")
    }
}

calcularParImpar(parseInt(prompt("Ingrese un número")));