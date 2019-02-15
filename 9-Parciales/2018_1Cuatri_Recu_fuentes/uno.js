
function mostrar()
{
    var mascota;
    var mascotados;
    var peso;
    var pesodos;
    mascota=prompt("como se llama tu primer mascota");
    mascotados=prompt("como se llama tu otra mascota");
    peso=prompt("cuanto pesa tu primer mascota");
    pesodos=prompt("cuanto pesa tu segunda mascota");
    peso=parseInt(peso);
    pesodos=parseInt(pesodos);
    alert("tenes una mascota que se llama "+ mascota+" y otra "+ mascotados+"que pesan "+ mascota " y "+mascotados+ " sumados pesan"+(peso+pesodos));
}
