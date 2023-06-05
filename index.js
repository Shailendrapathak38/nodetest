var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hellow ');
});

app.listen(80, function() => {
           console.log('started');
});
