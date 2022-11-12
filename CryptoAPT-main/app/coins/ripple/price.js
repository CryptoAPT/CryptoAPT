let btc;


//Ripple=>USD
fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
    .then(response=> response.json())
    .then(data=> btc = data.ripple.usd)
.then(data=> document.getElementById("amount").innerHTML = btc);
