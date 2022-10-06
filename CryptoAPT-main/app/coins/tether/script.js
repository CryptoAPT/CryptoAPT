let btc;


fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd")
.then(response=> response.json())
.then(data=> btc = data.tether.usd)
.then(data=> document.getElementById("value").innerHTML = btc);
   
