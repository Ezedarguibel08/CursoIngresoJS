/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho
    var largo
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    alert("Necesitas "+ [ancho*3+largo*3]+" metros de alambre");
}
function Circulo () 
{
    var radio;
    var area;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    area=radio*radio;
    area=parseInt(area);
    alert("Necesitas"+[area*3]+" metros de alambre");
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var cal;
    var cemento;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    cal=(largo*3+ancho*3)*2;
    cemento=(largo*2+ancho*2)*2;
    cal=parseInt(cal);
    cemento=parseInt(cemento);
    alert("Se necesitan "+cal+" bolsas de cal y "+cemento+" de cemento");
}