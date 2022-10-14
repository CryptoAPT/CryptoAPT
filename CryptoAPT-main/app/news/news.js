// -- VARIABLES --


// Títulos
var titulo1;
var titulo2;
var titulo3;
var titulo4;
var titulo5;
var titulo6;
var titulo7;
var titulo8;
var titulo9;
var titulo10;
var titulo11;
var titulo12;
var titulo13;
var titulo14;
var titulo15;
var titulo16;
var titulo17;
var titulo18;
var titulo19;
var titulo20;

// Tags
var tag1;
var tag2;
var tag3;
var tag4;
var tag5;
var tag6;
var tag7;
var tag8;
var tag9;
var tag10;
var tag11;
var tag12;
var tag13;
var tag14;
var tag15;
var tag16;
var tag17;
var tag18;
var tag19;
var tag20;

//Sources
var source1;
var source2;
var source3;
var source4;
var source5;
var source6;
var source7;
var source8;
var source9;
var source10;
var source11;
var source12;
var source13;
var source14;
var source15;
var source16;
var source17;
var source18;
var source19;
var source20;



/*-Tags-*/

   //1
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag1 = data.Data[0].tags)
   .then(data => document.getElementById("tag1").innerHTML = tag1)
        
       //2
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag2 = data.Data[1].tags)
   .then(data => document.getElementById("tag2").innerHTML = tag2)
   
       //3
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag3 = data.Data[2].tags)
   .then(data => document.getElementById("tag3").innerHTML = tag3)
   
       //4
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag4 = data.Data[3].tags)
   .then(data => document.getElementById("tag4").innerHTML = tag4)
   
       //5
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag5 = data.Data[4].tags)
   .then(data => document.getElementById("tag5").innerHTML = tag5)
             
           //6
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag6 = data.Data[5].tags)
   .then(data => document.getElementById("tag6").innerHTML = tag6)
       
           //7
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag7 = data.Data[6].tags)
   .then(data => document.getElementById("tag7").innerHTML = tag6)
       
           //8
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag8 = data.Data[7].tags)
   .then(data => document.getElementById("tag8").innerHTML = tag8)
   
           //9
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag9 = data.Data[8].tags)
   .then(data => document.getElementById("tag9").innerHTML = tag9)
         
       //10
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag10 = data.Data[9].tags)
   .then(data => document.getElementById("tag10").innerHTML = tag10)
   
       //11
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag11 = data.Data[10].tags)
   .then(data => document.getElementById("tag11").innerHTML = tag11)
   
       //12
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag12 = data.Data[11].tags)
   .then(data => document.getElementById("tag12").innerHTML = tag12)
   
       //13
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag13 = data.Data[12].tags)
   .then(data => document.getElementById("tag13").innerHTML = tag13)
             
           //14
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag14 = data.Data[13].tags)
   .then(data => document.getElementById("tag14").innerHTML = tag14)
       
           //15
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag15 = data.Data[14].tags)
   .then(data => document.getElementById("tag15").innerHTML = tag15)
       
           //16
       fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
       .then(response => response.json())
       .then(data => tag16 = data.Data[15].tags)
   .then(data => document.getElementById("tag16").innerHTML = tag16)
   
           //17
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag17 = data.Data[16].tags)
   .then(data => document.getElementById("tag17").innerHTML = tag17)
         
       //18
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag18 = data.Data[17].tags)
   .then(data => document.getElementById("tag18").innerHTML = tag18)
   
       //19
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag19 = data.Data[18].tags)
   .then(data => document.getElementById("tag19").innerHTML = tag19)
   
       //20
   fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
   .then(response => response.json())
   .then(data => tag20 = data.Data[19].tags)
   .then(data => document.getElementById("tag20").innerHTML = tag20)
             
   
   


/*-Fuentes-*/ 

    //1
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source1 = data.Data[0].source)
    .then(data => document.getElementById("source1").innerHTML = source1)

    //2
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source1 = data.Data[0].source)
    .then(data => document.getElementById("source1").innerHTML = source1)

    //3
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source2 = data.Data[1].source)
    .then(data => document.getElementById("source2").innerHTML = source2)

    //4
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source3 = data.Data[2].source)
    .then(data => document.getElementById("source3").innerHTML = source3)

    //5
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source4 = data.Data[3].source)
    .then(data => document.getElementById("source4").innerHTML = source4)

    //6
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source5 = data.Data[4].source)
    .then(data => document.getElementById("source5").innerHTML = source5)

    //7
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source6 = data.Data[5].source)
    .then(data => document.getElementById("source6").innerHTML = source6)

    //8
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source7 = data.Data[6].source)
    .then(data => document.getElementById("source7").innerHTML = source7)

    //9
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source8 = data.Data[7].source)
    .then(data => document.getElementById("source8").innerHTML = source8)

    //10
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source9 = data.Data[8].source)
    .then(data => document.getElementById("source9").innerHTML = source9)

    //11
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source10 = data.Data[9].source)
    .then(data => document.getElementById("source10").innerHTML = source10)

    //12
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source11 = data.Data[10].source)
    .then(data => document.getElementById("source11").innerHTML = source11)

    //13
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source12 = data.Data[11].source)
    .then(data => document.getElementById("source12").innerHTML = source12)

    //14
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source13 = data.Data[12].source)
    .then(data => document.getElementById("source13").innerHTML = source13)

    //15
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source14 = data.Data[13].source)
    .then(data => document.getElementById("source14").innerHTML = source14)

    //16
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source15 = data.Data[14].source)
    .then(data => document.getElementById("source15").innerHTML = source15)

    //17
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source16 = data.Data[15].source)
    .then(data => document.getElementById("source16").innerHTML = source16)

    //17
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source17 = data.Data[16].source)
    .then(data => document.getElementById("source17").innerHTML = source17)

    //18
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source18 = data.Data[17].source)
    .then(data => document.getElementById("source18").innerHTML = source18)

    //19
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source19 = data.Data[18].source)
    .then(data => document.getElementById("source19").innerHTML = source19)

    //20
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => source20 = data.Data[19].source)
    .then(data => document.getElementById("source20").innerHTML = source20)


/*-URL'S-*/ 



/*-Títulos-*/ 
    //1
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo1 = data.Data[0].title)
.then(data => document.getElementById("title1").innerHTML = titulo1)
     
    //2
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo2 = data.Data[1].title)
.then(data => document.getElementById("title2").innerHTML = titulo2)

    //3
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo3 = data.Data[2].title)
.then(data => document.getElementById("title3").innerHTML = titulo3)

    //4
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo4 = data.Data[3].title)
.then(data => document.getElementById("title4").innerHTML = titulo4)

    //5
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo5 = data.Data[4].title)
.then(data => document.getElementById("title5").innerHTML = titulo5)
          
        //6
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo6 = data.Data[5].title)
.then(data => document.getElementById("title6").innerHTML = titulo6)
    
        //7
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo7 = data.Data[6].title)
.then(data => document.getElementById("title7").innerHTML = titulo7)
    
        //8
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo8 = data.Data[7].title)
.then(data => document.getElementById("title8").innerHTML = titulo8)

        //9
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo9 = data.Data[8].title)
.then(data => document.getElementById("title9").innerHTML = titulo9)
      
    //10
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo10 = data.Data[9].title)
.then(data => document.getElementById("title10").innerHTML = titulo10)

    //11
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo11 = data.Data[10].title)
.then(data => document.getElementById("title11").innerHTML = titulo11)

    //12
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo12 = data.Data[11].title)
.then(data => document.getElementById("title12").innerHTML = titulo12)

    //13
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo13 = data.Data[12].title)
.then(data => document.getElementById("title13").innerHTML = titulo13)
          
        //14
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo14 = data.Data[13].title)
.then(data => document.getElementById("title14").innerHTML = titulo14)
    
        //15
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo15 = data.Data[14].title)
.then(data => document.getElementById("title15").innerHTML = titulo15)
    
        //16
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
    .then(response => response.json())
    .then(data => titulo16 = data.Data[15].title)
.then(data => document.getElementById("title16").innerHTML = titulo16)

        //17
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo17 = data.Data[16].title)
.then(data => document.getElementById("title17").innerHTML = titulo17)
      
    //18
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo18 = data.Data[17].title)
.then(data => document.getElementById("title18").innerHTML = titulo18)

    //19
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo19 = data.Data[18].title)
.then(data => document.getElementById("title19").innerHTML = titulo19)

    //20
fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key={a4874012c0cdff9b7e08a451d450046f9174f2896b72dfb388cfca2ff292254b}")
.then(response => response.json())
.then(data => titulo20 = data.Data[19].title)
.then(data => document.getElementById("title20").innerHTML = titulo20)
          

