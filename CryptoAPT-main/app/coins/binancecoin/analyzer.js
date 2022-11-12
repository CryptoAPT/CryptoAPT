

//Sentencia del analizador:
//Comienza por el caso n°3 para ver si el holdeo es viable




const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

//Declaración de los tres divs de compra, venta y sell
var buy = document.getElementById('buy-div');
var sell = document.getElementById('sell-div');
var hold = document.getElementById('hold-div');

function showdiv1() {
    if(buy.style.display == "none") {
        buy.style.display = "block";
    }
}

function showdiv2() {
    if(sell.style.display == "none") {
        sell.style.display = "block";
    }
}

function showdiv3() {
    if(hold.style.display == "none") {
        hold.style.display = "block";
    }
}

btn.onclick= function() {
    var primeramediahora=19427, segundamediahora=10000, terceramediahora=10000;

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
    if(porcentajePromedio > porcentaje){
    showdiv1();
    } 
     else if(porcentajePromedio < porcentaje) {
          showdiv2();
        }
        else {
            showdiv3();
        
    } 
    
}
