/*RETO UNO*/
function suma (num1,num2){
	return num1 + num2;
}
suma(1, 2);
suma(0, 0);
suma(245, 923);
/*RETO DOS*/
function saluda(nombre){
	return "Hola " + nombre;
}
saluda("Juan");
saluda("Yu-kai Chou");
saluda("");
/*RETO TRES*/
function longitud(cadena){
	return cadena.length;
}
longitud("");
longitud("Hola");
longitud("You Rock");
/**RETO CUATRO */
function isAlive(playerName, points){
	if (playerName === "ikk" && points > 30  || playerName === "gut" && points > 10){
		return true; 
	}else{
		return false;
	}
		
}
isAlive("ikk", 50);
isAlive("gut", 50);
isAlive("ikk", 20);
isAlive("gut", 5);
isAlive("trek", 50);
/**RETO CINCO */
function fizzBuzz(numero){
	if (numero % 3 === 0 && numero % 5 === 0){	
		return "fizzbuzz";	
	}else if (numero % 5 === 0) {
			return "Buzz";
		}else  if (numero % 3 === 0){
			return "fizz";
		} else {
			return numero;
		}
	}
fizzBuzz(15);
/**RETO SEIS */
