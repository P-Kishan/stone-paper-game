let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePera = document.querySelector("#user-score");
const compScorepera = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorePera.innerText = userScore;
        msg.innerText = `🎉 You Win!. You ${userChoice} Beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorepera.innerText = compScore;
        msg.innerText = `😢 You Lost, ${compChoice} You Beats ${userChoice}`
        msg.style.backgroundColor = "red";

    }
};


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }

};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});