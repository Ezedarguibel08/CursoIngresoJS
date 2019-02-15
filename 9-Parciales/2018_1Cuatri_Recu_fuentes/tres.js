function mostrar()
{
    var precio;
    var preciodos;
    var preciotres;
    var precioiva;
    var final;
    precio=document.getElementById("elPrecioFinal").value;
    precio=parseInt(precio);
    precioiva=precio*21/100;
    preciotres=precioiva+precio;
    precioiva=parseInt(precioiva);
    preciotres=parseInt(preciotres);
    preciodos=preciotres*10/100;
    final=preciodos+preciotres;
    final=parseInt(final);
    preciodos=parseInt(preciodos);
    alert("Ellos deberan pagar $"+(final/3)+" cada uno");

}
