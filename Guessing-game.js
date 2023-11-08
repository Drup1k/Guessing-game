// Set the number of learners in the class
const numberOfLearners = 25;

//Set the maximum number
document.getElementById('max-number').textContent = numberOfLearners;

//Generate a secret number
const secretNumber = Math.floor(Math.random() * numberOfLearners) + 1;

//Add event listener to the button
document.getElementById('guess-button').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess-input').value, 10);
   
    if(userGuess === secretNumber) {
    alert('Awesome! Your number ' + userGuess + ' was correct. You can be named many things, hungry not being one of them.');
   } else {
    alert('Bummer... You guessed ' + userGuess + ' and the secret number was ' + secretNumber);
   }
});