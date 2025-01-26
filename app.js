// Prueba de avivinar el numero secreto 
/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 8;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + ' Pero elegiste ' + intento );
}*/

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

alert("Verificar si el numero es verdadero o falso");

let numero = parseFloat (prompt("ingresa un numero"));
let numeroVerdadero = 5;

if (numero === 5) {
    alert("el numero es positivo")
} else {
    alert("el numero es negativo");
}

