<?php 
    $conexion = mysqli_connect("localhost","root","","cripto");
    session_start();
    
    
   if (isset($_POST['email']) && isset($_POST['pass']))
    {
      $cn="SELECT * FROM user where  email= '" . $_POST['email'] . "'" ;
      $ce = mysqli_query($conexion, $cn);
      $a = mysqli_fetch_array($ce);
      
     if($a['email'] == $_POST['email'] && $a ['pass'] == $_POST['pass'])
      {
        $_SESSION['user']=$a['user'];
        header('location: main.php');
        
        exit();

      }
      else if ($a['email']!=$_POST['email'])
      {
 
        echo '<script type="text/javascript">'; 
        echo 'alert("EMAIL INCORRECTO");'; 
        echo 'window.location.href = "login.html";';
        echo '</script>';
      }
      else
      {
        echo '<script type="text/javascript">'; 
        echo 'alert("CONTRASEÑA INCORRECTA");'; 
        echo 'window.location.href = "login.html";';
        echo '</script>';
      }
      
    
    } 
    
    
    
   
  
   
    

    
   
    ?>
    
    
  
 
