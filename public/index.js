var socket = io.connect('http://localhost:3400/') //connect to the server

// var new = '<img src="http://purecontemporary.blogs.com/behind_the_curtains/images/studio_becker_1.jpg">'
// var old = '<img src="https://s-media-cache-ak0.pinimg.com/originals/14/a1/e7/14a1e768d270438637c8ff49da85e8b6.gif">'
// var furniture = ['old' , 'new']

var furniture = [];
furniture[0] = '<img src="http://purecontemporary.blogs.com/behind_the_curtains/images/studio_becker_1.jpg">'


socket.on('connect', function(data){ //when connected, do something
  console.log('connected to the server' + socket.id) //log out our id
})

//THIS IS THE FUNCTION FOR CONTROLLER 1

$('.controller1').click(function(e){ //on click, do something

console.log(e);

console.log("click")

var data = {
  'top' : e.clientY,
  'left' : e.clientX,
}
socket.emit('controller1hit', data); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})


//THIS RESETS THE PROJECTION SCREEN

$('.button').click(function(b){ //on click, do something

console.log(b);

console.log("clickbutton")

var dataToReset = {
}

socket.emit('ResetButton', dataToReset); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})
