let luckyNumber;
let tryCounter = 0;
let triedNumbers = [];

function getLuckyNumber() {
  luckyNumber = Math.floor(Math.random() * 10) + 1;
  console.log("Your lucky number is: " + luckyNumber);
}

function tr() {
  if (tryCounter >= 2) {
    console.log("You have reached the maximum number of tries. Better luck next time!");
    return;
  }
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  while (triedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }
  triedNumbers.push(randomNumber);
  tryCounter++;
  console.log("Generated number: " + randomNumber);
  if (randomNumber === luckyNumber) {
    console.log("Congratulations! You won the lucky draw game.");
  } else {
    console.log("Try again.");
  }
}

getLuckyNumber();
tr();
