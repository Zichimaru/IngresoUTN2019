function Mostrar()
{
//tomo la edad  
var edad
edad=parseInt(document.getElementById("edad").value)

estadoCivil=(document.getElementById("estadoCivil").value)

if(edad<18 && estadoCivil == ("Casado") || estadoCivil== ("Divorciado") ){
alert(" es muy joven para no ser soltero")

}
	


}//FIN DE LA FUNCIÓN