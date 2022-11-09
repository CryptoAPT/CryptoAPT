let btc;



//Bitcoin=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd") 
    .then(response => response.json())
    .then(data => btc = data.bitcoin.usd)
    .then(data => document.getElementById("amount").innerHTML = btc);
    

