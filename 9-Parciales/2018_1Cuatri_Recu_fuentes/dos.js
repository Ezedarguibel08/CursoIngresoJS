function mostrar()
{
	var precio;
	var precioDescuento;
	var precioFinal;
	precio=prompt("cuanto vale");
	precio=parseInt(precio);
	precioDescuento=precio*10/100;
	precioDescuento=parseInt(precioDescuento);
	precioFinal=precio+(precio-precioDescuento)*21/100;
	alert("Tu compra es de $"+precio+" tenes un descuento del 10% "+"queda en "+precioDescuento+" mas el iva "+precioFinal);   
}
