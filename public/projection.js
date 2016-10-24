var socket = io.connect('http://localhost:3000') //set up a place for us to connect to, and try to connect

socket.on('connect', function(data){ //when we are connected do soemthing
  console.log('connected to the server' + socket.id) //log out our socket's id, some long garbled number letter thing that is unique
})

socket.on("projectionRectangle", function(data){ //if we see a projectionRectangle message then do some stuff
  console.log(data);

  //use jQuery to add a rect to the screen, notice the alternate jQuery syntax

//first make a div then change the css, then append the body. this is not possible with the "normal" syntax because order of operations! (with chained methods)
  $("<div>💀</div>").css({
    'position': 'absolute',
    "top" : data.top,
    "left" : data.left
  }).appendTo('body')

})
