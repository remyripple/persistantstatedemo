var socket = io.connect('http://localhost:3400') //set up a place for us to connect to, and try to connect

socket.on('connect', function(data){ //when we are connected do soemthing
  console.log('connected to the server' + socket.id) //log out our socket's id, some long garbled number letter thing that is unique
})


$('.room').click(function(){
  console.log("click");
})

// $('.result1').click(function(z){
//   $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
//     'position' : 'relative',
//     'top' : '5px'
//   }).appendTo('.result1')
// })

socket.on("projectionRectangle", function(data){ //if we see a projectionRectangle message then do some stuff
  console.log(data);
  // $('.result1').click(function(e){
    $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
      'position' : 'relative',
      'top' : '5px'
    }).appendTo('.result1')
  })



  // })

// socket.on("projectionRectangle", function(data){ //if we see a projectionRectangle message then do some stuff
//   console.log(data);
  //use jQuery to add a rect to the screen, notice the alternate jQuery syntax

//first make a div then change the css, then append the body. this is not possible with the "normal" syntax because order of operations! (with chained methods)
//   $("<div>💀</div>").css({
//     'position': 'absolute',
//     "top" : data.top,
//     "left" : data.left
//   }).appendTo('body')
//
// })

// socket.on('storedPositionsMessage', function(spData){
//   console.log(spData);
//
//   spData.forEach(function(position){
//     $("<div>👻</div>").css({
//       'position': 'absolute',
//       "top" : position.top,
//       "left" : position.left
//     }).appendTo('body')
//
//   })
//
// })
