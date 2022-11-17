<html>
<head>
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>
    <?php
  
      $conexion = mysqli_connect("localhost","root","","cripto");
      $cn="SELECT * FROM cardano";
      $consulta=mysqli_query($conexion,$cn);
      $datos=mysqli_fetch_array($consulta);
     
      
     
    ?>

<script>
  var a =<?php echo json_encode($datos); ?>;
     
 console.log("El contenido de la variable es: " + a)
 google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2004',  a],
    ['2005',  2],
    ['2006',  3],
    ['2007',  4]
  ]);

  var options = {
    title: 'Bitcoin',
    legend:{position:'none'},
    backgroundColor:'#FFD372',
    colors: ['#FF1E1E'],
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
</script>

<div id="curve_chart" style="width: 900px; height: 500px"></div>
</body>
</html>