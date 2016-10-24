var socket = io.connect('http://localhost:3400/') //connect to the server

// var new = '<img src="http://purecontemporary.blogs.com/behind_the_curtains/images/studio_becker_1.jpg">'
// var old = '<img src="https://s-media-cache-ak0.pinimg.com/originals/14/a1/e7/14a1e768d270438637c8ff49da85e8b6.gif">'
// var furniture = ['old' , 'new']

var furniture = [];
furniture[0] = '<img src="http://purecontemporary.blogs.com/behind_the_curtains/images/studio_becker_1.jpg">'


socket.on('connect', function(data){ //when connected, do something
  console.log('connected to the server' + socket.id) //log out our id
})

// $('.button').click(function(v){
// var buttonRefresh = {
//
// }
// socket.emit('addRectangle', buttonRefresh)
// })

$('.controller1').click(function(e){ //on click, do something

console.log(e);

console.log("click")


// location.reload(true);

// $('<div></div>').css({
//   'position': 'absolute',
//   'height' :  '10px',
//   'width' : '10px',
//   'top' : e.clientY,
//   'left' : e.clientX,
//   'background-color' : 'blue'
// }).appendTo('body')

// $('<div>')

var dataToSend = {
  'top' : e.clientY,
  'left' : e.clientX,
}

socket.emit('addRectangle', dataToSend); //send out a message of "addRectangle" to the server, it will handle the details (party planning)
})
