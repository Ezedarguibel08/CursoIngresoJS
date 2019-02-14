/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var uno;
    var dos;
    var tres;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    alert(uno+dos+tres);
}
function Promedio () 
{
    var uno;
    var dos;
    var tres;
    var promedio;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    promedio=(uno+dos+tres)/3;
    promedio=parseInt(promedio);
    alert(promedio);
}
function PrecioFinal () 
{
    var uno;
    var dos;
    var tres;
    var preciofinal;
    uno=document.getElementById("PrecioUno").value;
    dos=document.getElementById("PrecioDos").value;
    tres=document.getElementById("PrecioTres").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
    preciofinal=(uno+dos+tres);
    alert(preciofinal+preciofinal*21/100)
	
}