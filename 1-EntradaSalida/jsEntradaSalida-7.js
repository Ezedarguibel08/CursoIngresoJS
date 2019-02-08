/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno;
    var dos;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno)
    dos=parseInt(dos)
    alert("La suma es "+[uno+dos]);
	
}

function restar()
{
    var uno;
    var dos;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno)
    dos=parseInt(dos)
    alert("La resta es "+[uno-dos]);
	
}

function multiplicar()
{ 
    var uno;
    var dos;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno)
    dos=parseInt(dos)
    alert("La multiplicacion da "+[uno*dos]);
	
}

function dividir()
{
    var uno;
    var dos;
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno)
    dos=parseInt(dos)
	alert("La division da "+[uno/dos]);
}

