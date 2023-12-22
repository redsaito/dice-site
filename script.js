function rollDice() {
  var randNum1 = Math.floor(6 * Math.random() + 1);
  var image1 = document.querySelector(".img-1");
  image1.setAttribute("src", "./images/dice" + randNum1 + ".png");

  var randNum2 = Math.floor(6 * Math.random() + 1);
  var image2 = document.querySelector(".img-2");
  image2.setAttribute("src", "./images/dice" + randNum2 + ".png");

  var h1 = document.querySelector("h1");
  if (randNum1 === randNum2) {
    h1.innerHTML = "It's a Draw! 🚩";
  } else if (randNum1 > randNum2) {
    h1.innerHTML = "Player <span>1</span> Wins! 1️⃣ 🏆";
  } else {
    h1.innerHTML = "Player <span>2</span> Wins! 2️⃣ 🏆";
  }
}

var button = document.querySelector(".roll-btn");
button.addEventListener("click", rollDice);
