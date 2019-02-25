function mostrar()
{
//tomo la edad  
    var mesDelAño;
    mesDelAño=document.getElementById('mes').value;
    var mensaje;
    switch(mesDelAño)
{
    case("Enero"):
    mensaje="Que comiences bien el año";
    break;
    case("Marzo"):
    mensaje="A clases";
    break;
    case("Julio"):
    mensaje="Se vienen las vacaciones";
    break;
    case("Diciembre"):
    mensaje="Felices fiestas";
    break;
    default:
    mensaje="Nada";
    }
alert(mensaje)

}//FIN DE LA FUNCIÓN