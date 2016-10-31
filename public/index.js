var socket = io.connect('http://localhost:3400/') //connect to the server

socket.on('connect', function(data){ //when connected, do something
  console.log('connected to the server' + socket.id) //log out our id
})



//THIS IS THE FUNCTION FOR CONTROLLER 1

$('.controller1').click(function(a){ //on click, do something

console.log(a);

console.log("click")

var data = {

}
socket.emit('controller1hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})



//THIS IS THE FUNCTION FOR CONTROLLER2

$('.controller2').click(function(b){ //on click, do something

console.log(b);

console.log("click")

var data = {

}
socket.emit('controller2hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})

//THIS IS THE FUNCTION FOR CONTROLLER 3

$('.controller3').click(function(c){ //on click, do something

console.log(c);

console.log("click")

var data = {

}
socket.emit('controller3hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})

//THIS IS THE FUNCTION FOR CONTROLLER 4

$('.controller4').click(function(c){ //on click, do something

console.log(c);

console.log("click")

var data = {

}
socket.emit('controller4hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})



//THIS RESETS THE PROJECTION SCREEN

$('.button').click(function(b){ //on click, do something

console.log(b);

console.log("clickbutton")

var dataToReset = {
}

socket.emit('ResetButton', dataToReset); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})
