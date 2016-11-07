var socket = io.connect() //connect to the server

var gate = true;

socket.on('connect', function(data){ //when connected, do something
  console.log('connected to the server' + socket.id) //log out our id
})

$(window).bind(
  'touchmove',
   function(e) {
    e.preventDefault();
  }
);

$('.controller1, .controller2, .controller3, .controller4, .controller5, .controller6, .controller7, .controller8').addClass('animated pulse')

//THIS IS THE FUNCTION FOR CONTROLLER 1

$('.controller1').click(function(a){ //on click, do something
//
// console.log(a);
//
// console.log("click")





var data = {

}

if(gate == true){
  $(this).css('background-color', 'black');
  socket.emit('controller1hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})



//THIS IS THE FUNCTION FOR CONTROLLER2

$('.controller2').click(function(b){ //on click, do something
//
// console.log(b);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller2hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 3

$('.controller3').click(function(c){ //on click, do something
//
// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
  $(this).css('background-color', 'black');
socket.emit('controller3hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 4

$('.controller4').click(function(c){ //on click, do something
//
// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller4hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 5

$('.controller5').click(function(c){ //on click, do something
//
// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller5hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 6

$('.controller6').click(function(c){ //on click, do something

// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller6hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 7

$('.controller7').click(function(c){ //on click, do something
//
// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller7hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})

//THIS IS THE FUNCTION FOR CONTROLLER 8

$('.controller8').click(function(c){ //on click, do something
//
// console.log(c);
//
// console.log("click")




var data = {

}
if(gate == true){
$(this).css('background-color', 'black');
socket.emit('controller8hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
}
})




//THIS RESETS THE PROJECTION SCREEN

$('.button').click(function(b){ //on click, do something

// console.log(b);
//
// console.log("clickbutton")


setTimeout(function(){
    location.reload();
},5000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second

var dataToReset = {
}
gate = false;
socket.emit('ResetButton', dataToReset); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})
