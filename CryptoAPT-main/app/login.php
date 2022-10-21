<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- CSS -->
    <link rel="stylesheet" href="css/logstyle.css">
    <title>CryptoAPT</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon2.ico">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,600;0,700;0,800;0,900;1,100;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- BOOTSTRAP LINK -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </head>
  <body style="background-color: #000000;">
    <?php 
    $conexion = mysqli_connect("localhost","root","","cripto");
    
   if($_POST['cpass']==$_POST['pass'])
   {
     $cnmail= "SELECT * from user where email= '" . $_POST['email'] ."'" ;
     $consul = mysqli_query($conexion, $cnmail);
     $datos = mysqli_fetch_array($consul);
  
     if($datos['email']== $_POST['email'] && $datos['pass']==$_POST['pass'] && $datos['user']==$_POST['user'])
    {
      
      echo("USUARIO YA REGISTRADO");
      
    }
      else
      {
      $cn="INSERT INTO user (user,email,pass) values ('".$_POST['user']."','" .$_POST['email']."','" .$_POST['pass']."')";    
      $consultas = mysqli_query($conexion, $cn);
      ?>
      <img src="images/favicon.png" alt="logo" class="logoimg">

      <div class="login-container">
        <form style="margin-top: 20px;margin-left: 20px;margin-bottom: 20px;" action="main.php" method="POST">
        <div class="form-group">
          <label for="exampleInputEmail1" style="color:red; font-family: 'Raleway', sans-serif;"><strong><span class="font">Email</span></strong></label>
          <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width:85%;">
          <small id="emailHelp" class="form-text text-muted" style=" font-family: 'Raleway', sans-serif;"><strong>Nunca revelaremos sus datos personales con nadie.</strong></small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" style="color:red; font-family: 'Raleway', sans-serif;"><strong><span class="font">Contraseña</span></strong></label>
          <input type="text" name="pass" class="form-control" id="exampleInputPassword1" placeholder="Password" style="width: 85%;">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1"><strong><span class="font">No cerrar sesión</span></strong></label>
        </div>
        <div class="boton" style="text-align:center;">
        <button type="submit">ingresar</button>
        <!-- <a class="btn btn-primary" href="main.html" id="boton1" role="button" style=" font-family: 'Raleway', sans-serif;"><strong>Ingresar</strong></a>
        !-->
        </div>
      
      </form>
      </div>
      <?php
        
      }
   }
   else
   {
    echo("logeo fallido");
   }

    
    
    
        
    
    
    

    
?>

  
  </body>
</html>
