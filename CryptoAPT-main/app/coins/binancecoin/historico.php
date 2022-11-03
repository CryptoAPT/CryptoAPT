<?php

$mon=$_REQUEST['btc'];
echo($mon);

//BASE DE DATOS
$conexion = mysqli_connect("localhost","root","","cripto");
$a=0;
while($a==0)
{
    $cn="INSERT INTO binancecoin(precio) values ('$mon')";
    $consulta=mysqli_query($conexion,$cn);
    sleep(1800);
    header('location: carga.html');
    exit();

}

?>

 
 

