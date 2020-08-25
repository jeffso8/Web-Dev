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

  $("#" + gamePattern[0]).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id")

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  animatePress(userChosenColour);

  ifMatch()

  console.log(userClickedPattern);
});

// function checkAnswer(currentLevel) {
//   if ((userClickedPattern == gamePattern) && (userClickedPattern.length == gamePattern.length)) {
//     console.log("success");
//   } else {
//     console.log("wrong");
//   }
// }
function ifMatch() {
  if ((userClickedPattern == gamePattern) && (userClickedPattern.length == gamePattern.length)) {
    nextSequence()
  } else {
    $("#level-title").text("Game Over: Press anything to start again");
    var started = false;
    var userClickedPattern = [];
    var gamePattern = [];
  }
}

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
