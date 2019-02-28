function mostrar()
{//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadN;
	var cantidadP;
	var cantidadC;
	var cantidadPar;
	contador=0;
	respuesta='si';
	sumaPositivos=0;
	sumaNegativos=0;
	cantidadN=0;
	cantidadP=0;
	cantidadC=0;
	cantidadPar=0;
	

	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaNegativos=numeroIngresado+sumaNegativos;
			cantidadN++;
		}else
			{
			if(numeroIngresado>0)
			{
			sumaPositivos=numeroIngresado+sumaPositivos;
			cantidadP++;
			}else
			{
				cantidadC++;
			}
		}
	if(numero%2==0)
	{
	cantidadPar++;
	}
		
	
		respuesta=prompt("Ingresa no para salir");
	}
	

	console.log("La suma positivos "+ sumaPositivos);
	console.log("La suma negativos "+ sumaNegativos);
	console.log("Hay "+cantidadP+ "numeros positivos");
	console.log("Hay "+cantidadN+ "numeros negativos");
	console.log("Hay "+cantidadC+ " numeros cero");
	console.log("La diferencia entre positivos y negativos es "+[sumaPositivos-sumaNegativos]);
	console.log("El promedio de los positivos es "+);
	console.log("El promedio de los negativos es "+);
	console.log("Hay "+cantidadPar+ " numeros pares");



}//FIN DE LA FUNCIÓN