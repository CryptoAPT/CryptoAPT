let btc;





    //Polkadot=>USD    
fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd')
.then(response=> response.json()) 
.then(data => btc = data.polkadot.usd)
.then(data => document.getElementById("value").innerHTML = btc);
    

