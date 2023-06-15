function askNumber() {
  let answer = prompt(
    "Donner moi un nombre compris entre 0 et 50 s'il vous plaît"
  );
  if (answer < 0 || answer > 50) {
    askNumber();
  } else {
    return answer;
  }
}

let givenNumber = askNumber();

function askTheNumber() {
  return prompt("Devinez le nombre compris entre 0 et 50");
}

function didIWin(givenNumber, playerTwo) {
  if (playerTwo === givenNumber) {
    alert("Bravo ! vous avez deviné le nombre");
    return true;
  }
  if (playerTwo < givenNumber) {
    alert("Plus grand");
    return false;
  }
  if (playerTwo > givenNumber) {
    alert("Plus petit");
    return false;
  }
}

function gamePlay() {
  let playerTwo = askTheNumber();
  if (didIWin(givenNumber, playerTwo) === false) {
    gamePlay();
  }
}

gamePlay();
