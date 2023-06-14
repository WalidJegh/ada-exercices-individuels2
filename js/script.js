function askNumber() {
  return prompt("Donner moi un nombre s'il vous plaît");
}

function didIWin(givenNumber) {
  if (parseInt(givenNumber) === 22) {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  } else if (givenNumber < 22) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > 22) {
    alert("Plus petit");
    return false;
  }
}

function gamePlay() {
  let givenNumber = askNumber();
  if (didIWin(givenNumber) === false) {
    gamePlay();
  }
}

gamePlay();
