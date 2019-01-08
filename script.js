// create array of words
const word = ['horse', 'pizza', 'orange', 'sprinter', 'hilarious']
// select random word
let randomNum = Math.floor(Math.random() * word.length)
let wordPicked = word[randomNum]
let underscores = []
console.log(wordPicked)
// populate underscores based on word length
let getUnderscores = () => {
	for (let i = 0; i < wordPicked.length; i++) {
		underscores.push(' _ ')
	}
	return underscores
}
console.log(getUnderscores())
// listen for letter
// if the letter is correct replace underscore
// if the word has been guessed, alert you win
// if letter is incorrect and hasn't been guessed before, add to wrong guesses
// if letter is incorrect and hasn't been guesses before, draw next portion of man
// if man is complete, alert you lost
// if play again is pressed, clear wrong guesses
// if play again is pressed, pick new random word
// if play again is pressed, populate underscores based on word length