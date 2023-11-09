// Remove highlight from buttons
function highlightButton(buttonId) {
    document.querySelectorAll('.choice-button').forEach(button => {
        button.classList.remove('highlighted');
    })
    document.getElementById(buttonId).classList.add('highlighted');
}

// Set a number to every choice
const choiceRock = 0;
const choicePaper = 1;
const choiceScissors = 2;

let userChoice;

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }

    if ((userChoice === choiceRock && computerChoice === choiceScissors) ||
        (userChoice === choicePaper && computerChoice === choiceRock) ||
        userChoice === choiceScissors && computerChoice === choicePaper) {
            return "You Won against " + computerChoice;
        }
        return "You lost against " + computerChoice;
}
//Event listeners for player choice buttons
document.getElementById('rock').addEventListener('click', () => {
    userChoice = choiceRock;
    highlightButton('rock');
});
document.getElementById('paper').addEventListener('click', () => {
    userChoice = choicePaper;
    highlightButton('paper');
});
document.getElementById('scissors').addEventListener('click', () => {
    userChoice = choiceScissors;
    highlightButton('scissors');
});

//Event listener for play button
document.getElementById('com-play').addEventListener('click', () => {
    const computerChoice = Math.floor(Math.random() * 3);
    const resultMessage = determineWinner(userChoice, computerChoice);
    document.getElementById('result').textContent = resultMessage;
    // remove highlight from all choices
    document.querySelectorAll('.choice-button').forEach(button => {
        button.classList.remove('highlighted');
    })
})