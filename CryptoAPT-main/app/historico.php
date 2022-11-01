<?php

$conexion = mysqli_connect("localhost","root","","cripto");
$a=0;
while($a==0)
{
    $cn="INSERT INTO cardano(precio) values ('1')";
    $consulta=mysqli_query($conexion,$cn);
    sleep(1800);
}


?>

 
 

