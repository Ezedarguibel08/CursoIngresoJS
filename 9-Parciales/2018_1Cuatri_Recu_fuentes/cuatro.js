function mostrar()
{
	var libros;
	var precio;
	var tarjeta;
	var preciodos;
	var preciotres;
	libros=prompt("Cuantos libros va a comprar");
	precio=prompt("Cuanto cuestan");
	tarjeta=prompt("Va a pagar con tarjeta");
	precio=parseInt(precio)
	if(libros>=2){
		precio=precio+(precio*21/100);
	}else{
		if(precio>2000){
			preciodos=precio+(precio*15/100);
		}else{
			if(tarjeta=="si");
			preciotres=precio+(precio*10/100);
		}
	}


}
