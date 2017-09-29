const net = require('net');
const server = net.createServer();

var sockets = [];
var count = 0;

server.on('connection', (socket)=>{
  socket.count = count;
  sockets.push(socket);
  count++;
  console.log("connection");
  socket.write("welkom op Colin zijn server \n\r");
  socket.setEncoding('utf-8');
  socket.on('data',(data)=>{
    console.log(data);
    sockets.forEach((val)=>{
      if(val != socket){
        val.write(val.count + ":" + data);
      }
    })
  })
});

server.listen('3000');
