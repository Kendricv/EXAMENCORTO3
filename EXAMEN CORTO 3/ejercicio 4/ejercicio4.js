//Ejercicio 4
	//Escribe una función que compruebe si dos números dados están entre 100 y 200 y devuelva si o no.
    function ejercicio4(num1, num2) {
        if (num1 >= 100 && num1 <= 200 && num2 >= 100
            && num2 <= 200) {
                return true;
                } else {
                    return false;
                    }
                    }
                    console.log(ejercicio4(150, 180));