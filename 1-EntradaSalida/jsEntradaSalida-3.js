/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var dato;
    document.getElementById("elNombre");
    dato=document.getElementById("elNombre").value;
    console.log(dato);
    console.info(dato);
    console.error(dato);
	alert(dato);
}


