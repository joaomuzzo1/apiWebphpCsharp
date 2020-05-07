var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
    let nome = {
        "João":"Muzzo"
    }
    res.json(nome);
  });

  app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
  });