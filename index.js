
var player1 = prompt("  Player 1 Enter you Name");
  var player2 = prompt("  Player 2 Enter you Name");
var randomNumber1= Math.floor(Math.random()*6)+1;

var diceImage= "images/dice" + randomNumber1 + ".png"; //dice1 to dice6//
// var randomDiceSource = "images/" + diceImage; //images/dice1.png to images/dice2.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage);
// image1.setAttribute("src", diceImage);


var randomNumber2= Math.floor(Math.random()*6)+1;
var diceImage= "images/dice" + randomNumber2 + ".png"; //dice1 to dice6//

var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceImage);



if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML =  player1 +  " wins 💐 ";
}
else if ( randomNumber1 < randomNumber2) {



    document.querySelector("h1").innerHTML =   player2  + " wins 💐 ";

}
else {
  var loser =prompt("You both are loser.");

    document.querySelector("h1").innerHTML = loser + "  🤣 👎" ;
}
