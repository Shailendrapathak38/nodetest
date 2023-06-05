var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hellow ');
});

app.listen(8080, function() => {
           console.log('started');
});
