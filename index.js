var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var http = require('http').Server(app);

var PORT = 3014;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/examples', express.static(path.join(__dirname, 'examples')));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/watch', function(req, res){
	res.sendFile(__dirname + '/watch.html');
});

app.get('/search', function(req, res){
	res.sendFile(__dirname + '/search.html');
});

http.listen(PORT, function(){
	console.log('listening on *:' + PORT);
});