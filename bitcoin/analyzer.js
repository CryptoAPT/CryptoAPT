
function showDiv() {
    document.getElementById('hold-div').style.display = "block";
 }

 function showDiv2() {
    document.getElementById('buy-div').style.display = "block";
 }
 
 function showDiv3() {
    document.getElementById('hold-div').style.display = "block";
 } 


//Sentencia del analizador:
//Comienza por el caso n°3 para ver si el holdeo es viable
function analyzerScript() {
    var primeramediahora=19427, segundamediahora=20157, terceramediahora=19117;

    var valorElegido = (terceramediahora * 5) / 100;
    
    //Promedio entre las primeras dos semanas
    var promedio = (primeramediahora + segundamediahora) / 2;
    
    //Promedio entre las tres semanas para el valor hold
    var promedioHold = (primeramediahora + segundamediahora + terceramediahora) / 3;
    
    //Porcentaje de la tercer semana
    var porcentaje = (terceramediahora * 10) / 100;
    
    //Porcentaje de las primeras dos semanas
    var porcentajePromedio = (promedio * 10) / 100;
    
    //Porcentaje de la tercera semana
    var porcentajeHold = (promedioHold * 10) / 100; 
    
if(porcentajePromedio > porcentaje){function showDiv1();} 
 else if(porcentajePromedio < porcentaje) {
        function showDiv2()
    }
    else {
        function showDiv3()
    
} 
}
