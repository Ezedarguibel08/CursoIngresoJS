function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;
    precio=prompt("Cual es el precio");
    porcentaje=prompt("Cuanto tiene de porcentaje");
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);
    preciofinal=precio-precio*porcentaje/100;
    preciofinal=parseInt(preciofinal);
    document.getElementById("elPrecioFinal").value=preciofinal;

}
