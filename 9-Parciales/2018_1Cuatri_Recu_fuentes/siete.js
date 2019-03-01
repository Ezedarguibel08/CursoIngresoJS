function mostrar()
{	
	var velocidad
    var combustibles;
    var contador;
    var respuesta;
    var acumulador;
    var promedio;
    var tipo;
    contador = 0;
    acumulador = 0;

    while (contador < 5) 
    {
        velocidad = prompt("ingrese velocidad");
        velocidad = parseInt(velocidad)
        tipo = prompt("ingrese tipo de combustible");



        contador++

        if (velocidad > 0 && velocidad < 250) 
        {

        }
        acumulador = acumulador + velocidad;
        acumulador = parseInt(acumulador);
       
	} 
		promedio=acumulador/5;
		alert("el promedio es "+promedio);
}
