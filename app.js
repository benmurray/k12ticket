var express = require('express');
var app = express();

app.use(function(req, res, next) {
    var ua = req.headers['user-agent'];
    db.zadd('online', Date.now(), us, next);
});

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
