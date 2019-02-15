function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var hola
	var mensaje;
	hola=Math.floor((Math.random() * 10) + 1);
	if(hola<4)
	{
		mensaje=" Vamos,la proxima se puede";
	}else
	{
		if(hola>3&&hola<9)
		{
			mensaje=" Aprobó";
		}else
		{
			if(hola>8)
			{
				mensaje=" Excelente";
			}

		}
		alert("Su nota es "+hola+mensaje);
	}

}//FIN DE LA FUNCIÓN