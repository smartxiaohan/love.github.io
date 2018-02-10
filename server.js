var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));

io.on('connect', function(socket){
	console.log('a user connected');
	
	socket.emit('connected', 'are you kidding me?');
});

http.listen(3333, function() {
	console.log('server listenning on :3333');
});