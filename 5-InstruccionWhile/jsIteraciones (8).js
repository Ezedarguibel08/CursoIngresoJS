function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	negativo=1;
	positivo=0;
	contador=0;
	respuesta="si";
	var queresContinuar;
	queresContinuar="si";
	while(queresContinuar!=no)
	{
		queresContinuar=prompt("Para salir escribir no");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN