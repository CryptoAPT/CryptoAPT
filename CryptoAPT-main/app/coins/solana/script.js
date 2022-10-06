let btc;


//Bitcoin=>USD

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
    .then(response=> response.json())
    .then(data=> btc = data.solana.usd)
    .then(data=> document.getElementById("value").innerHTML = btc);    
    

