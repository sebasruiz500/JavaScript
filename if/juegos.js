const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt (prompt("Adivina el número secreto entre el 1 al 10")); // parseInt = comprueba el primer argumento, una cadena, 
//e intenta devolver un entero de la base especificada. 
//prompt muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.

console.log(`Estes el número con que juega ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log("!Felicidades, adivinatste el número secreto");
    } else if(numeroJugador < numeroSecreto){
    console.log("El número es demasiado bajo, intenta de nuevo");
    } else{
    console.log("El número es muy alto, intenta de nuevo")
}
