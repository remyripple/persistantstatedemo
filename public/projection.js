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


//THSI IS THE RESULT FOR CONTROLELR 1 CLICK

socket.on("controller1ToResult1", function(data){ //if we see a projectionRectangle message then do some stuff
  console.log(data);
    $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
      'position' : 'relative',
      'top' : '5px'
    }).appendTo('.result1')
  })

//THIS IS THE RESULT FOR CONTROLLER 2 click

  socket.on("controller2ToResult2", function(data){ //if we see a projectionRectangle message then do some stuff
    console.log(data);
      $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
        'position' : 'relative',
        'top' : '5px'
      }).appendTo('.result2')
    })

//THIS IS THE RESULT FOR CONTROLLER 3 CLICK

  socket.on("controller3ToResult3", function(data){ //if we see a projectionRectangle message then do some stuff
    console.log(data);
      $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
        'position' : 'relative',
        'top' : '5px'
      }).appendTo('.result3')
    })


//THIS IS THE RESULT FOR CONTROLLER 3 CLICK

      socket.on("controller4ToResult4", function(data){ //if we see a projectionRectangle message then do some stuff
        console.log(data);
          $("<img src='http://www.sherv.net/cm/emoticons/hearts/happy-heart.gif'>").css({
            'position' : 'relative',
            'top' : '5px'
          }).appendTo('.result4')
        })

  //THIS IS THE RESULT FOR BUTTON RESET

  socket.on("ButtonResetingtoRoom", function(data){ //if we see a projectionRectangle message then do some stuff
    console.log(data);
      location.reload(true);
    })





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
// 🐀
//   })
//
// })
