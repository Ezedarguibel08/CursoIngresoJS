function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	
	contador=0;
	respuesta='si';
	numeroMaximo=-9999;
	numeroMinimo=9999;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		respuesta=prompt("Ingresa no para salir");
	
	}
	console.log("El maximo es "+ numeroMaximo);
	console.log("El minimo es "+ numeroMinimo);




}//FIN DE LA FUNCIÓN