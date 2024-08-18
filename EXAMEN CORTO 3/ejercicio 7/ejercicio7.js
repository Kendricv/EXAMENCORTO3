//Ejercicio 7
	//Escribe una función que, dado un número de 4 dígitos (por ejemplo, 1347), lo devuelva descompuesto
	//por pantalla como: Unidades de millar: 1000, centenas: 300, decenas: 40, unidades: 7.
    function descomponerNumero(num) {
        let unidades = num % 10;
        let decenas = Math.floor(num / 10) % 10;
        let centenas = Math.floor(num / 100) % 10;
        let millar = Math.floor(num / 1000);
        console.log(`Unidades de millar: ${millar * 1000}, centenas
            ${centenas * 100}, decenas: ${decenas * 10}, unidades: ${
                unidades
                }`
                );
                }
                descomponerNumero(1589);
