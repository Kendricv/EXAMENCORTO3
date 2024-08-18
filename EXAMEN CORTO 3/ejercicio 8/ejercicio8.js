//Ejercicio 8
	//Escribe una función que sume dos números dados. Si el resultado es mayor que 100, mostrarlo por consola y
	// si no mostrarlo por pantalla.
    function suma(num1, num2) {
        let resultado = num1 + num2;
        if (resultado > 100) {
            console.log(`La suma de ${num1} y ${num2} es ${resultado}`
                );
                } else {
                    document.write(`La suma de ${num1} y ${num2} es ${resultado}`
                        );
                        }
                        }
                        suma(50, 50);
                    
