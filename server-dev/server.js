var express = require('express');

var app = express();
var server = require('http').Server(app);

app.use(express.static('./build'));

app.use('/*', (req, res) => {
  res.sendfile('./build/index.html');
});

server.listen(8002, () => console.log('Listening on port %d', server.address().port));