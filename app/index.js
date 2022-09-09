//Bitcoin Variables
let btc;
let time;
let openn;
let high;
let low;
let closee;



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


//Bitcoin OHLC

fetch("https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=7")

    .then(response=> response.json())
    .then(data=> console.log(data))
    .then(data=> time= data[0][0], openn=data[0][1], high=data[0][2], low=data[0][3], closee[0][4] )
    .then(data=> openn= data[0][1])
    .then(data=> high=data[0][2])
    .then(data=> low=data[0][3])
    .then(data=> closee = data[0][4])
    

    function convertToOHLC(data) {
        data.sort((a, b) => d3.ascending(a.date, b.date));
        var result = [];
        var format = d3.timeFormat("%Y-%m-%d");
        data.forEach(d => d.date = format(new Date(d.date * 1000)));
        var allDates = [...new Set(data.map(d => d.date))];
        allDates.forEach(d => {
            var tempObject = {};
            var filteredData = data.filter(e => e.date === d);
            tempObject.date = d;
            tempObject.open = filteredData[0].price;
            tempObject.close = filteredData[filteredData.length - 1].price;
            tempObject.high = d3.max(filteredData, e => e.price);
            tempObject.low = d3.min(filteredData, e => e.price);
            result.push(tempObject);
        });
        return result;
    };