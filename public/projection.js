var socket = io.connect() //set up a place for us to connect to, and try to connect

socket.on('connect', function(data){ //when we are connected do soemthing
  console.log('connected to the server' + socket.id) //log out our socket's id, some long garbled number letter thing that is unique
})


$('.room').click(function(){
  console.log("click");
})

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});



//THSI IS THE RESULT FOR CONTROLELR 1 CLICK

socket.on("controller1ToResult1", function(data){ //if we see a projectionRectangle message then do some stuff
  // console.log(data);
    $("<img src='assets/result1.png'>").css({
      'position' : 'relative',
      'top' : '5px'
    }).appendTo('.result1')
  })

//THIS IS THE RESULT FOR CONTROLLER 2 click

  socket.on("controller2ToResult2", function(data){ //if we see a projectionRectangle message then do some stuff
    // console.log(data);
      $("<img src='assets/result2.gif'>").css({
        'position' : 'relative',
        'top' : '5px'
      }).appendTo('.result2')
    })

//THIS IS THE RESULT FOR CONTROLLER 3 CLICK

  socket.on("controller3ToResult3", function(data){ //if we see a projectionRectangle message then do some stuff
    // console.log(data);
      $("<img src='assets/result3.gif'>").css({
        'position' : 'relative',
        'top' : '5px'
      }).appendTo('.result3')
    })


//THIS IS THE RESULT FOR CONTROLLER 4 CLICK

      socket.on("controller4ToResult4", function(data){ //if we see a projectionRectangle message then do some stuff
        // console.log(data);
          $("<img src='assets/result4.png'>").css({
            'position' : 'relative',
            'top' : '5px'
          }).appendTo('.result4')
        })

//THIS IS THE RESULT FOR CONTROLLER 5 CLICK

              socket.on("controller5ToResult5", function(data){ //if we see a projectionRectangle message then do some stuff
                // console.log(data);
                  $("<img src='assets/result5.gif'>").css({
                    'position' : 'relative',
                    'top' : '5px'
                  }).appendTo('.result5')
                })

//THIS IS THE RESULT FOR CONTROLLER 6 CLICK

          socket.on("controller6ToResult6", function(data){ //if we see a projectionRectangle message then do some stuff
              // console.log(data);
                $("<img src='assets/result6.gif'>").css({
                  'position': 'relative',
                      'top' : '5px'
                          }).appendTo('.result6')
                        })

//THIS IS THE RESULT FOR CONTROLLER 7 CLICK

        socket.on("controller7ToResult7", function(data){ //if we see a projectionRectangle message then do some stuff
          // console.log(data);
            $("<img src='assets/result7.png'>").css({
                  'position' : 'relative',
                  'top' : '5px'
                }).appendTo('.result7')
                })

//THIS IS THE RESULT FOR CONTROLLER 8 CLICK

      socket.on("controller8ToResult8", function(data){ //if we see a projectionRectangle message then do some stuff
        // console.log(data);
          $("<img src='assets/result8.gif'>").css({
              'position' : 'relative',
              'top' : '5px'
            }).appendTo('.result8')
          })

  //THIS IS THE RESULT FOR BUTTON RESET

  socket.on("ButtonResetingtoRoom", function(data){ //if we see a projectionRectangle message then do some stuff
    // console.log(data);
    $('.result1, .result2, .result3, .result4, .result5, .result6, .result7, .result8 ').addClass('animated hinge')


setTimeout(function(){
    location.reload();
},5000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second

    })
