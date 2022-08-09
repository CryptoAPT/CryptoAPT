let btc;

//Bitcoin=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(response => response.json())
    //.then(data => console.log(data))
    //.then(data => document.getElementById('a').innerHTML = data.bitcoin.usd)
    .then(data=> btc=data.bitcoin.usd)
    

//Ethereum=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> console.log(data))
    
//cardano=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> console.log(data))
    
//tether=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> console.log(data))

//BinanceCoin=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> console.log(data))

//Ripple=>USD
fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
    .then(response=> response.json()) 
    .then(data=> console.log(data))

//USDCoin=>USD    
fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=usd')
    .then(response=> response.json()) 
    .then(data=> console.log(data))

//Polkadot=>USD    
fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd')
    .then(response=> response.json()) 
    .then(data=> console.log(data))

//Solana=>USD
fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
    .then(response=> response.json())
    .then(data => console.log(data))    

//Ripple=>USD
fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
    .then(response=> response.json())
    .then(data=> console.log(data))