var io = require('socket.io')
var express = require('express')
var app = express()
var http = require('http').Server(app)

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html')
})

http.listen(3000, function(){
	console.log('listen on *:3000')
})