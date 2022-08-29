function diceRoll() {
  n1=Math.floor(Math.random()*6+1);
  n2=Math.floor(Math.random()*6+1);

  document.querySelector(".dice-player-1").setAttribute("src", "images/dice"+n1+".png");
  document.querySelector(".dice-player-2").setAttribute("src", "images/dice"+n2+".png");

  if(n1>n2) {
    document.querySelector(".main-heading").innerHTML = "Player 1 wins!";
  } else if(n2>n1) {
    document.querySelector(".main-heading").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector(".main-heading").innerHTML = "It's A Draw!";
  }
}

function refresh() {
  document.querySelector(".main-heading").innerHTML = "The Dice Game";
  a = document.querySelectorAll(".dice-img").length;
  for(i=0; i<a; i++) {
    document.querySelectorAll(".dice-img")[i].setAttribute("src", "images/dice6.png");
  }
}
