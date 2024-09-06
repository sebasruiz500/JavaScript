let expresion = prompt("Ingrese la verdura que desea buscar");

switch(expresion){
    case "Naranajas":
        console.log("Las narajanas cuestan $20 el kito");
        break;
    case "Manzanas":
        console.log("Las manzanas cuesta $43 el kio");
        break;
    case "Plátanos":
        console.log("El plátano esta en $30 el kilo");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuesta $25 el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${expresion}`);
}

console.log("¿Hay algo más que deses?");