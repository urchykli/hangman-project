// create array of words
const word = ["horse", "pizza", "orange", "sprinter", "hilarious"];
// select random word
let randomNum = Math.floor(Math.random() * word.length);
let wordPicked = word[randomNum];

// create empty arrays
let wrongGuess = [];
let underscores = [];
let wrongCount = 0;

console.log(wordPicked);

// DOM Manipulation
let makeUnderscore = document.getElementsByClassName("underscore");
let wrong = document.getElementsByClassName("wrongGuess");
let man = document.getElementById("littleMan");
// populate underscores based on word length
let getUnderscores = () => {
  for (let i = 0; i < wordPicked.length; i++) {
    underscores.push(" _ ");
    makeUnderscore[0].innerHTML = underscores.join(" ");
  }
  return underscores;
};

console.log(getUnderscores());
// listen for letter
document.addEventListener("keypress", event => {
  let guess = String.fromCharCode(event.keyCode);
	let keyed = guess.toLowerCase();
	//checking if letter is in word
  if (wordPicked.indexOf(keyed) > -1) {
    //where can I put the includes to alert once the game has been won?
    for (let i = 0; i < wordPicked.length; i++) {
      // if the letter is correct replace underscore
      if (wordPicked[i] == keyed) {
        underscores[i] = keyed;
        makeUnderscore[0].innerHTML = underscores.join(" ");
      }
    }
  }
  // if letter is not in the word
  else if (wrongGuess.indexOf(keyed) === -1) {
    wrongCount++;
    if (wrongCount === 10) {
      man.src = `./images/${wrongCount}.jpg`;
      alert("You Lose");
    } else {
      // update image
      man.src = `./images/${wrongCount}.jpg`;
      // if letter is incorrect and hasn't been guessed before, add to wrong guesses
      wrongGuess.push(keyed);
      wrong[0].innerHTML = wrongGuess.join(" ");
    }
  } else if (wrongGuess.indexOf(keyed) > -1) {
    alert("Already guessed");
  } else if (underscores.indexOf("_") === -1) {
    alert("You won!");
  }
  console.log(underscores);
  console.log(keyed);
});

document.getElementById("reset").addEventListener("click", function(){
	location.reload()
})

// if the word has been guessed, alert you win
// if play again is pressed, clear wrong guesses
// if play again is pressed, pick new random word
// if play again is pressed, populate underscores based on word length
