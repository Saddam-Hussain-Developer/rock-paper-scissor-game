let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

userScorePara = document.querySelector("#user-score");
compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock","paper","scissor"]
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw Game!!"
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper,scissor 
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true
        };
        showWinner(userWin,userChoice,compChoice);
        };
    };

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});