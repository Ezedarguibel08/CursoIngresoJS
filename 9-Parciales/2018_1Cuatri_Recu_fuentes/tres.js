function mostrar()
{
    var precio;
    var porcentaje;
    var preciodescuento;
    var precioiva;
    precio=prompt("Cuanto vale");
    porcentaje=prompt("Cuanto descuento tiene");
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);
    preciodedescuento=precio-precio*porcentaje/100;
    preciodedescuento=parseInt(preciodedescuento);
    precioiva=preciodedescuento+preciodedescuento*21/100;
    precioiva=parseInt(precioiva);
    alert("Usted tiene un descuento de $"+[precio*pocentaje/100]+" Entonces su producto vale $"+[preciodedescuento]+" y un iva de "[precio*21/100]);
    document.getElementById("elPrecioFinal").value=precioiva;
}
