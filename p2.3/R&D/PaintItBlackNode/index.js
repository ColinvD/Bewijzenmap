var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var counter = 0;
var drawing = [];

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/script.js', function(req, res) {
  res.sendFile(__dirname + '/script.js');
});
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + '/style.css');
});
io.on('connection', function(socket){
  counter++;
  console.log(counter);
  socket.on('start', function(){
    if(counter > 1){
      console.log("hi");
      socket.emit('start', drawing);
    }
  })

  socket.on('change', function(arr){
    drawing = arr
    io.emit('change', arr);
  })

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('a user disconnected');
    counter--;
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
