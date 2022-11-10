<html>
<head>
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>
    <?php
        $a=1900;
    ?>

<script>
    var a = <?= json_encode($a) ?>;
    
 console.log("El contenido de la variable es: " + a)
 google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2004',  a],
    ['2005',  1170],
    ['2006',  660],
    ['2007',  1030]
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