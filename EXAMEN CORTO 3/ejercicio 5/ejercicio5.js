//Ejercicio 5
	//Escribe una función que compruebe si dos números dados están entre 0 y 50 o entre 100 y 150,
	//ambos inclusive, y devuelva si o no
    function ejercicio5(num1, num2) {
        return (num1 >= 0 && num1 <= 50 || num1 >= 100
            && num1 <= 150) && (num2 >= 0 && num2 <=
                50 || num2 >= 100 && num2 <= 150);
                }
                
                console.log(ejercicio5(30, 120));