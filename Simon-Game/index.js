var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false;

$(document).keydown(function() {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level: " + level);
    started = true;
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  level++;
  $("#level-title").text("Level: " + level);

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  $("#" + gamePattern[level - 1]).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(".btn").click(clickHandler);

function clickHandler() {
  var userChosenColour = $(this).attr("id")

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  animatePress(userChosenColour);

  ifMatch(userClickedPattern.length - 1);

  console.log(userClickedPattern);
}

function ifMatch(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {

      window.setTimeout(function() {
        nextSequence()
      }, 1000);
      userClickedPattern = [];
    }

  } else {
    startOver();
  }
}

function startOver(){
  $("#level-title").text("Game Over: Press any key to start again");
  started = false;
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  animateScreen();
  var audio = new Audio("sounds/" + "wrong" + ".mp3");
  audio.play();
};

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  window.setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};

function animateScreen() {
  $("body").addClass("game-over");
  window.setTimeout(function() {
    $("body").removeClass("game-over")
  }, 100);
};
