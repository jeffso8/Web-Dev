

document.getElementsByClassName("img1")[0].addEventListener("click", MyFunction);
document.getElementsByClassName("img2")[0].addEventListener("click", MyFunction);


function MyFunction(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceNum = "images/dice" + randomNumber1 + ".png";
  var diceNum1 = "images/dice" + randomNumber2 + ".png";
  document.getElementsByClassName("img1")[0].src = "file:///Users/jeffso/Desktop/Web%20Development/Dicee/" + diceNum;
  document.getElementsByClassName("img2")[0].src = "file:///Users/jeffso/Desktop/Web%20Development/Dicee/" + diceNum1;

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins";
  }
  else{
    document.querySelector("h1").textContent = "It's a tie!";
  }
}
