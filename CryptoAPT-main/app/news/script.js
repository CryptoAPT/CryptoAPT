//fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=97156e617d7e4b2f917ea3e21a7d5383")

fetch("https://newsapi.org/v2/everything?domains=cryptonews.com&apiKey=97156e617d7e4b2f917ea3e21a7d5383")
    .then(response => response.json())
    .then(data=> console.log(data))