/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var num1;
var num2
    var resultado;
    num1= document.getElementById("sueldo").value;
 // resultado= document.getElementById("Resultado").value;
    num1= parseInt(num1);
    //resultado= parseInt(resultado); 
    num2 = num1*10/100;

  resultado= num1+num2 ;

 document.getElementById("resultado").value= resultado;

alert (num2);

}
