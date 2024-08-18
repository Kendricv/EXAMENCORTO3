//Ejercicio 12
	//Escribe una función que devuelva la concatenación de los elementos 347 y 222 del array anterior
	// (Esto es, la cadena elemento347elemento222).
    function ejercicio12(array) {
       
        if (array.length > 347 && array.length > 222) {
            return array[347] + array[222];
        } else {
            return "El array no tiene suficientes elementos";
        }
    }
    
    let miArray = new Array(348).fill('elemento');
          miArray[347] = "elemento347";
          miArray[222] = "elemento222";
    
          let resultado = ejercicio12(miArray);
          console.log(resultado); 
    