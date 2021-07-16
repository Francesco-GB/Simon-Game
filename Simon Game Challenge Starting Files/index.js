var list = [];
var memory = [];
var i = 0;

// ############ LISTEN ############ OK!
$(".btn").click(function(press){
  switch(press.target.id){
  case "green":
  $(".green").addClass("pressed");
  setTimeout(function(){
  $(".green").removeClass("pressed")}, 150);
    memory.push(0);
    break;
  case "red":
  $(".red").addClass("pressed");
  setTimeout(function(){
  $(".red").removeClass("pressed")}, 150);
    memory.push(1);
    break;
  case "yellow":
  $(".yellow").addClass("pressed");
  setTimeout(function(){
  $(".yellow").removeClass("pressed")}, 150);
    memory.push(2);
    break;
  case "blue":
  $(".blue").addClass("pressed");
  setTimeout(function(){
  $(".blue").removeClass("pressed")}, 150);
    memory.push(3);
    break;
  default: console.error("Errore verifica");
  }
  for (var i = 0; i < memory.length; i++) {
    if(memory[i] != list[i]) {
        gameover()
      }
  }
  if (memory.length == list.length) {
    memory = []
    setTimeout(function(){
      addLevel()

    }, 400)
  }
})


// ############ START ############
$(document).keydown(function(start){
  if(start.key == "a"){
    memory = [];
    addLevel()
  }
});

// ############ ADD LEVEL ############ OK!
function addLevel(){
  var random = (Math.floor(Math.random()*4));
  $("h1").html("Level "+(list.length+1));
  list.push(random);
  switch (random) {
    case 0:
      $(".green").addClass("pressed");
      setTimeout(function(){
      $(".green").removeClass("pressed")}, 150);
      break;
    case 1:
      $(".red").addClass("pressed");
      setTimeout(function(){
      $(".red").removeClass("pressed")}, 150);
      break;
    case 2:
      $(".yellow").addClass("pressed");
      setTimeout(function(){
      $(".yellow").removeClass("pressed")}, 150);
      break;
    case 3:
      $(".blue").addClass("pressed");
      setTimeout(function(){
      $(".blue").removeClass("pressed")}, 150);
      break;
    default: console.error("Errore sequenza");
  }
  i=0;
}

// ############ CHECK ############


// ############ GAMEOVER ############ OK!
function gameover(){
  $("body").addClass("game-over");
  $("h1").html("GAME OVER");
    setTimeout(function(){
      setTimeout(function(){
        setTimeout(function(){
          setTimeout(function(){
            setTimeout(function(){
              setTimeout(function(){
                setTimeout(function(){
                  $("body").removeClass("game-over");
                  $("h1").html("Press a to start");
                }, 1000);
                $("body").addClass("game-over");
              }, 100);
              $("body").removeClass("game-over");
            }, 100);
            $("body").addClass("game-over");
          }, 100);
          $("body").removeClass("game-over");
        }, 100);
        $("body").addClass("game-over");
      }, 100);
      $("body").removeClass("game-over");
    }, 100);
  list = [];
}
