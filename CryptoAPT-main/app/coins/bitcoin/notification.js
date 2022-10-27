/*
El menú deberá hacer lo siguiente:
Con un
Valor de compra:
Y con un
Valor de venta:
Debería notificar cuando llegue a uno de esos dos estados.

entradaCompra
entradaVenta
variableCompra
variableVenta
checkStatus = false


function clickReady {

if(entradaCompra != variableCompra) {
    checkStatusC == false;
}
else if(entradaCompra== variableCompra) {
    checkStatusC == true;
}
else if(entradaVenta!=variableVenta) {
    checkStatusV==false;
}
else if(entradaVenta==variableVenta) {
    checkStatusV==true;
}

if(checkStatusC==true) {
    divappear();
}
else if(checkStatusV==true) {
    divappear();
}

}




*/

var checkStatusC;;
var checkStatusV;
var entradaCompra = 20200; //document.getElementById('entradaCompra').innerHTML;
var entradaVenta; // document.getElementById('entradaVenta').innerHTML;
var variableCompra = 20200;
var variableVenta = 20500;



function clickReady(){

    if(entradaCompra != variableCompra) {
        checkStatusC == false;
    }
    else if(entradaCompra== variableCompra) {
        checkStatus();
    }
    else if(entradaVenta!=variableVenta) {
        checkStatusV==false;
    }
    else if(entradaVenta==variableVenta) {
        checkStatus();
    }
    
    
}

function checkStatus() {
    if(checkStatusC==true) {
        //divAppear();
        console.log("La variable de ingreso de compra es igual al valor del btc");
    }
    else if(checkStatusV==true) {
        console.log("La variable de venta es igual al valor del btc");
        //divAppear();
    }
}


function divAppear() {
/*
En esta función, un div aparecerá con lo siguiente:

variableMoneda llegó al precio que ústed quiso, esta es variableEntrada;
*/

}


