<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php


      $conexion = mysqli_connect("localhost","root","","cripto");

     if($_POST['cpass']==$_POST['pass'])
     {
         if(strlen($_POST['pass'])>=8)
         {


               $cnmail= "SELECT * from user where email= '" . $_POST['email'] ."'" ;
               $consul = mysqli_query($conexion, $cnmail);
               $datos = mysqli_fetch_array($consul);

                 if($datos['email']== $_POST['email'] || $datos['user']==$_POST['user'])
                {
                  echo '<script type="text/javascript">';
                  echo 'alert("USUARIO YA REGISTRADO");';
                  echo 'window.location.href = "signup.html";';
                  echo '</script>';
                  //<script>alert("Usuario ya registrado") window.location.href = "</script>!-->

                  exit();
                }
                else
                {
                $cn="INSERT INTO user (user,email,pass) values ('".$_POST['user']."','" .$_POST['email']."','" .$_POST['pass']."')";
                $consultas = mysqli_query($conexion, $cn);

                echo '<script type="text/javascript">';
                echo 'alert("REGISTRADO CORRECTAMENTE");';
                echo 'window.location.href = "login.html";';
                echo '</script>';
              }
          }

        else
        {
          echo '<script type="text/javascript">';
          echo 'alert("LA CONTRASEÑA DEBE CONTENER MAS DE 8 CARACTERES");';
          echo 'window.location.href = "signup.html";';
          echo '</script>';
        }
      }

     else
     {
       echo '<script type="text/javascript">';
       echo 'alert("SU CONTRASEÑA NO COINCIDE CON AL CONFIRMACION");';
       echo 'window.location.href = "signup.html";';
       echo '</script>';
     }










  ?>
</body>
</html>
