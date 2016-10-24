var express = require('express')//hey we want to use express,our webhost/routing system
var app = express(); //starts express running
var server = require("http").Server( app ) //start the server instance on a port
var io = require('socket.io')(server) //use socket.io for real time connections aka websockets

server.listen(3400, function(){ //set up a server on port 3000, do a call back when it started successfully
  console.log("sever started on 3400");
});

app.use(express.static('public')) //server out everything that is in the public folder

// app.get('/', function(req, res){ //look at the root request using express.js (notice the "app" at the beginning)
// res.sendFile(__dirname + '/public/index.html') //after a request, respond aka: "res" with the file that we want to send back to the user, in this case index.html
//
// });
//
//
// app.get('/projection', function(req, res){ //look at the /projection path and send back the projection.html file
// res.sendFile(__dirname + '/public/projection.html')
//
// });

io.on('connection', function(socket){ //if socket.io sees a new connection, do something with them...
    console.log(socket.id) //prints out the socket that connected (ie: all users + the projection)

//THIS IS THE CONTROLLER1 HIT
  socket.on('controller1hit', function(data){ //look for any messages with the "addRectangle"
    console.log("controller1 change" + data); //log out the "data" in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
    io.emit("controller1ToResult1", data); //send out a message to the projection to add a rect to the screen.
})
//THIS IS THE CONTROLLER2HIT
  socket.on('controller2hit', function(data){ //look for any messages with the "addRectangle"
    console.log("controller2 change" + data); //log out the "data" in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
    io.emit("controller2ToResult2", data); //send out a message to the projection to add a rect to the screen.
  })
//THIS IS THE CONTROLLER3HIT
  socket.on('controller3hit', function(data){ //look for any messages with the "addRectangle"
    console.log("controller3 change" + data); //log out the "data" in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
    io.emit("controller3ToResult3", data); //send out a message to the projection to add a rect to the screen.
  })
//THIS IS THE RESET BUTTON HIT
socket.on('ResetButton', function(data){ //look for any messages with the "addRectangle"
  console.log("button is reseting" + data); //log out the "data" in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
  io.emit("ButtonResetingtoRoom", data); //send out a message to the projection to add a rect to the screen.
})

})
