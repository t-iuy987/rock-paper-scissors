
const uPara = document.getElementById("user-choice");
const para2 = document.createElement("p");
const cPara = document.getElementById("computer-choice");
const para1 = document.createElement("p");
const span = document.getElementById("turn-msg");
const rbtn = document.getElementById("rock-btn");
const pbtn = document.getElementById("paper-btn");
const sbtn = document.getElementById("scissors-btn");
let playerScore = 0;
let compScore = 0;
let computerSelection;

function computerPlay() {
    moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function makeMove(playerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    span.textContent ="";

    // computers turn
    computerSelection = computerPlay();

    //now display computer's choice
    
    para1.textContent = "Computer's choice: " + computerSelection;
    para1.style.fontWeight = "bolder";
    para1.style.fontSize = "30px";
    para1.style.textAlign = "center";
    cPara.appendChild(para1);
    
    
    para2.style.fontWeight = "bolder";
    para2.style.fontSize = "30px";
    para2.style.textAlign = "center";
    para2.style.color = "#C85945";

    //display user's choice + check if the game ends(did anybody scored 5?)
    
    if (playerSelection === 'rock' && computerSelection === 'Scissors' ||
        playerSelection === 'paper' && computerSelection === 'Rock' ||
        playerSelection === 'scissors' && computerSelection === 'Paper') { //win

        para2.textContent = "Your choice: " + playerSelection;
        playerScore++;
        if (playerScore===5) displayWinner(playerScore, compScore);

        displayScores("user", playerScore);
    }
    else if (playerSelection === 'rock' && computerSelection === 'Paper' ||
        playerSelection === 'paper' && computerSelection === 'Scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') { // lose

        para2.textContent = "Your choice: " + playerSelection ;
        compScore++;
        if (compScore===5) displayWinner(playerScore, compScore);
        displayScores("computer", compScore);
    }

    else if (playerSelection === computerSelection.toLowerCase()) {
        para2.textContent = "Your choice: " + playerSelection;
        if (compScore===5 && playerScore===5) displayWinner(playerScore, compScore);



    }
    uPara.appendChild(para2);
}


function displayWinner(player, computer) {
    console.log("Player: " + player + "\nComputer: " + computer);

    const buttons = document.getElementById("buttons");
    buttons.style.display = "none";

    para1.textContent="";
    para2.textContent="";

    if (player === computer) {
        span.textContent = "It's a tie";
    }
    else if (player > computer) {
        span.textContent = "💥Wohoo! You Won";
    }
    else {
        span.textContent = "💻 Computer Won";
    }
}

function displayScores(player, score) { // player = user or computer, 
    if (player === 'computer') {
        const scorePara = document.getElementById("computer-score");
        scorePara.textContent = "Computer: " +score;
    }
    else if (player === 'user') {
        const scorePara = document.getElementById("user-score");
        scorePara.textContent = "User: " +score;
    }

}

function startGame() {
    // hide start button
    let button = document.getElementById("sBtn");
    button.style.display = "none";

    // display the buttons 
    const buttons = document.getElementById("buttons");
    buttons.style.display = "flex";
    //display the score board
    const scoreBoard = document.getElementById("score");
    scoreBoard.style.display = "flex";



    // display scores 
    displayScores('computer', 0)
    displayScores('user', 0)


    
    span.textContent = "Choose an option";
    span.style.fontWeight = "bolder";
    span.style.fontSize = "30px";
    span.style.textAlign = "center";
    span.style.color = "#C85945";
    


}
function hideButtons()
{
    const scoreBoard = document.getElementById("score");
    scoreBoard.style.display = "none";
    
    const buttons = document.getElementById("buttons");
    buttons.style.display = "none";
}

hideButtons()


const button = document.getElementById("sBtn");
button.addEventListener('click', startGame);

rbtn.addEventListener('click', () => { console.log("rock"); userSelection = makeMove('rock'); });
pbtn.addEventListener('click', () => { console.log("paper"); userSelection = makeMove('paper'); });
sbtn.addEventListener('click', () => { console.log("scissors"); userSelection = makeMove('scissors'); });


