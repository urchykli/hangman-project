// create array of words
const word = ['horse', 'pizza', 'orange', 'sprinter', 'hilarious']
// select random word
let randomNum = Math.floor(Math.random() * word.length)
let wordPicked = word[randomNum]

// create empty arrays
let wrongGuess = []
let underscores = []


console.log(wordPicked)

// DOM Manipulation
let makeUnderscore = document.getElementsByClassName('underscore')
let wrong = document.getElementsByClassName('wrongGuess')

// populate underscores based on word length
let getUnderscores = () => {
	for (let i = 0; i < wordPicked.length; i++) {
		underscores.push(' _ ')
		makeUnderscore[0].innerHTML = underscores.join(' ')
	}
	return underscores
}

console.log(getUnderscores())
// listen for letter
document.addEventListener('keypress', (event) => {
	let keyed = String.fromCharCode(event.keyCode)
	if (wordPicked.indexOf(keyed) > -1 && underscores[0] !== '_') {
		for (let i = 0; i < wordPicked.length; i++) {
			// if the letter is correct replace underscore
			if (wordPicked[i] == keyed) {
				underscores[i] = keyed
				makeUnderscore[0].innerHTML = underscores.join(' ')
			}
		}
	}
	else {
		wrongGuess.push(keyed)
		wrong[0].innerHTML = wrongGuess.join(' ')
	}
		console.log(underscores)
	console.log(keyed)
})





// if the word has been guessed, alert you win
// if letter is incorrect and hasn't been guessed before, add to wrong guesses
// if letter is incorrect and hasn't been guesses before, draw next portion of man
// if man is complete, alert you lost
// if play again is pressed, clear wrong guesses
// if play again is pressed, pick new random word
// if play again is pressed, populate underscores based on word length