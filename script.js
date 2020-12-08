let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() *10);
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let human = (target - currentHumanGuess) + 100; 
    let computer = (target - computerGuess) + 100; 
    if ((human < computer) || (human === computer)) {
        return true;
    } else if (computer < human) {
        return false;
    } 
};

const updateScore = winner => {
   
    if (winner === "human") {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

let advanceRound = () => currentRoundNumber += 1;