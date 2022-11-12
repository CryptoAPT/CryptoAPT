let btc;



//BinanceCoin=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data => btc = data.binancecoin.usd)
    .then(data => document.getElementById("amount").innerHTML = btc);


