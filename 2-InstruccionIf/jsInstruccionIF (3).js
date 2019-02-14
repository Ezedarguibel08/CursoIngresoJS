function mostrar()
{
//tomo la edad  
    var edad
    edad=document.getElementById("edad").value;
    if(edad<18){
        alert("Usted es menor");
    }
    else
    {
        if(edad>=18)
        alert("usted es mayor");
    }


}//FIN DE LA FUNCIÓN