function askNumber() {
  return prompt("Donner moi un nombre s'il vous plaît");
}
let givenNumber = askNumber();
function didIWin(givenNumber) {
  if (parseInt(givenNumber) === 22) {
    alert("Bravo ! Vous avez deviné le nombre");
  } else if (givenNumber < 22) {
    alert("Plus grand");
  } else if (givenNumber > 22) {
    alert("Plus petit");
  }
}

function gamePlay() {
  didIWin(givenNumber);
}

gamePlay();
