let btc;


//cardano=>USD
/*fetch("https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> btc = data.cardano.usd)
    .then(data=> document.getElementById("value").innerHTML = btc);
*/

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> btc = data.ethereum.usd)
    .then(data=> document.getElementById("value").innerHTML = btc);