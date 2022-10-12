/*

--Desarrollo textual del Analyzer.JS

El analyzer debería comparar entre los últimos tres valores que haya encontrado en un intervalo de una semana cada uno.
Además, dentro de los valores iniciales, se encontrará el margen para mantener la moneda elegido por el usuario.


Ejemplo:

Semana 1: BTC = $21200

Semana 2: BTC = $23000

Semana 3: BTC = $19000

Hold: BTC = $1800

-------------------
¿Qué debería pasar?
-------------------

Dependiendo estos valores historicos, el analyzer calculará la siguiente decisión del usuario.

Sacará un promedio entre la primera y segunda semana, además, sacará el 10% del resultado. Entonces, tal y como se colocó en el ejemplo, el promedio final entre
las variables Semana1 y Semana2 sería:

promedio= (semana1) + (semana2) / 2;
porcentajepromedio = (promedio * 10) / 100;

--Aplicado al ejemplo--

promedio= 21200 + 23000 /2;
porcentajepromedio = (22100 * 10) / 100;

\\ Salida:
promedio = 22100
porcentajepromedio = 2210;
\\

El segundo calculo será de la tercera semana. 
Los casos se decidirán bajo el margen del 10%.

porcentaje= (semana3 * 10) / 100;

--Aplicado al ejemplo--

porcentaje = (19000 * 10) / 100;

\\ Salida:
porcentaje = 1900
\\ 

El tercer cálculo y cuarto cálculo serán para el caso n°3 de la decisión.
Calculará un segundo promedio entre el porcentaje de la tercera semana y el promedio de las primeras dos semanas.

promediohold = (promedio) + (porcentaje) / 2;
porcentajehold = (promediohold * 10) / 100;

--Aplicado al ejemplo--

promediohold = 22100 + 19000 / 2;
porcentajehold = (20550 * 10) / 100;

\\ Salida:
promediohold = 20.550
porcentajehold = 2055
\\

PorcentajeHold será la variable utilizada para decidir si la moneda debería mantenerse o usará otro caso.

Teniendo en cuenta los resultados, el script tiene a su disposición los siguientes casos:

Posible caso 1 (Vender): 

Este caso le recomendará al usuario vender. Esto pasará únicamente cuando la variable promedio entre las
primeras dos semanas sea menor al porcentaje de la tercera semana.

Posible caso 2 (Comprar):

Este caso le recomendará al usuario comprar. Esto pasará únicamente cuando la variable promedio entre las
primeras dos semanas sea mayor al porcentaje de la tercera semana.

Posible caso 3 (Mantener):

Este caso le recomendará al usuario mantener el valor. Esto pasará únicamente cuando la variable ValorElegido
sea mayor a porcentajehold.

-----------------------------------
---FUNCIONAMIENTO DEL ANALIZADOR---
-----------------------------------

Entonces, aplicado al ejemplo, tenemos las siguientes variables finales:

promedio = 22100
porcentaje = 1900
valorelegido = 1800
porcentajehold = 2055
porcentajepromedio = 2210


valorElegido (1900) no es mayor a porcentajeHold (1800). Entonces, el analizador no recomendará holdear.

porcentajePromedio (2210) no es mayor que porcentaje (1900). El analizador no recomendará vender la moneda.

porcentajePromedio (2210) es mayor que porcentaje (1900). El analizador -recomendará- comprar la moneda.


INFORMACIÓN IMPORTANTE : Hasta que no se obtengan valores vía web, se utilizarán valores manuales no reales.
El analizador puede no ser 100% preciso.
*/

var semana1=19427, semana2=20157, semana3=19117;
var valorElegido = 400 // Acá iría el valor que el usuario coloque.

//Promedio entre las primeras dos semanas
var promedio = (semana1 + semana2) / 2;

//Promedio entre las tres semanas para el valor hold
var promedioHold = (semana1 + semana2 + semana3) / 3;

//Porcentaje de la tercer semana
var porcentaje = (semana3 * 10) / 100;

//Porcentaje de las primeras dos semanas
var porcentajePromedio = (promedio * 10) / 100;

//Porcentaje de la tercera semana
var porcentajeHold = (promedioHold * 10) / 100; 

//Sentencia del analizador:
//Comienza por el caso n°3 para ver si el holdeo es viable
if(valorElegido > porcentajeHold) {
    
}
    else if(porcentajePromedio > porcentaje) {
        swapContent('sell');
    }
        else if(porcentajePromedio < porcentaje) {
            //document.getElementById("decision").innerHTML = "El analizador recomienda comprar la moneda";
            console.log("El analizador recomienda comprar la moneda");
        }
    
        
        function swapContent (id) {
            const main = document.getElementById('decision');
            const div = document.getElementById(id);
            const clone = div.cloneNode(true);
        
            while (main.firstChild) main.firstChild.remove();
        
            main.appendChild(clone);
        }

        
