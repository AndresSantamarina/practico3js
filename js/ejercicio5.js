//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mostrarInformacion(texto){
    if (texto === texto.toLowerCase()){
        document.write("El texto está en minúsculas")
    }else if (texto === texto.toUpperCase()){
        document.write("El texto está en mayúsculas")
    }else{
        document.write("El texto está formado por una combinación de mayúsculas y minúsculas")
    }
}

mostrarInformacion(prompt("Ingrese una cadena de texto"))