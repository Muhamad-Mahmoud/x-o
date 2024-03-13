let turnRole = "X";

let player = document.querySelector(".player");

let boxes = document.querySelectorAll(".box");

function end(n1, n2, n3) {
  player.innerHTML = `${boxes[n1].innerHTML} Winner`;
  document.getElementById("b-" + n1).style.backgroundColor = "#084298eb";
  document.getElementById("b-" + n2).style.backgroundColor = "#084298eb";
  document.getElementById("b-" + n3).style.backgroundColor = "#084298eb";

  setInterval(function () {
    player.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function winner() {
  if (
    boxes[0].innerHTML == boxes[1].innerHTML &&
    boxes[1].innerHTML == boxes[2].innerHTML &&
    boxes[1].innerHTML != ""
  ) {
    end(0, 1, 2);
  } else if (
    boxes[3].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[5].innerHTML &&
    boxes[3].innerHTML != ""
  ) {
    end(3, 4, 5);
  } else if (
    boxes[6].innerHTML == boxes[7].innerHTML &&
    boxes[7].innerHTML == boxes[8].innerHTML &&
    boxes[6].innerHTML != ""
  ) {
    end(6, 7, 8);
  } else if (
    boxes[0].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[8].innerHTML &&
    boxes[0].innerHTML != ""
  ) {
    end(0, 4, 8);
  } else if (
    boxes[2].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[6].innerHTML &&
    boxes[2].innerHTML != ""
  ) {
    end(2, 4, 6);
  } else if (
    boxes[0].innerHTML == boxes[3].innerHTML &&
    boxes[3].innerHTML == boxes[6].innerHTML &&
    boxes[0].innerHTML != ""
  ) {
    end(0, 3, 6);
  } else if (
    boxes[1].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[7].innerHTML &&
    boxes[1].innerHTML != ""
  ) {
    end(1, 4, 7);
  } else if (
    boxes[2].innerHTML == boxes[5].innerHTML &&
    boxes[5].innerHTML == boxes[8].innerHTML &&
    boxes[2].innerHTML != ""
  ) {
    end(2, 5, 8);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turnRole === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    player.innerHTML = " Player(2) O";
    turnRole = "O";
  } else if (turnRole === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    player.innerHTML = " Player(1) X";
    turnRole = "X";
  }
  winner();
}
