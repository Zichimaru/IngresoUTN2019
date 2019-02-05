/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	
 var edad;
  edad= prompt("cuantos años tenes?");
document.getElementById("elNombre").value = edad;
}

