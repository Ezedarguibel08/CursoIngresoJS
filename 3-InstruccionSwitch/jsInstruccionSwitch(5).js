function mostrar()
{
//tomo la edad  
    var laHora; 
    var mensaje;
    laHora=document.getElementById('hora').value;
    switch(laHora)
    {
        case("7"):
        case("8"):
        case("9"):
        case("10"):
        case("11"):
        mensaje="Es de mañana"
        break;
        default:
        mensaje="nada"
    }
	alert(mensaje)

}//FIN DE LA FUNCIÓN