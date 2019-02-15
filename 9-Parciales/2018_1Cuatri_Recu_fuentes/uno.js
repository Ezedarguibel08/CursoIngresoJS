
function mostrar()
{
    var mascota;
    var mascotados;
    var peso;
    var pesodos;
    var pesofinal
    mascota=prompt("como se llama tu primer mascota");
    mascotados=prompt("como se llama tu otra mascota");
    peso=prompt("cuanto pesa tu primer mascota");
    pesodos=prompt("cuanto pesa tu segunda mascota");
    peso=parseInt(peso);
    pesodos=parseInt(pesodos);
    pesofinal=peso+pesodos;
    alert("Tus mascotas se llaman "+mascota+" y "+mascotados+" pesan "+peso+" y "+pesodos+" sumados pesan "+pesofinal);

}
