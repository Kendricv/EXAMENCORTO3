
	//Escribe una función que devuelva la diferencia entre un número dado y 15. Si el número dado es negativo o
// igual a 15, debe mostrar un texto de error.
function ejercicio1(num) {
    if (num <= 15) {
        return "Error: El número debe ser mayor a 15";
        } else {
            return num - 15;
            }
            };
            console.log(ejercicio1(20));