let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice= () => {
    //rock paper scissors
    const option = ["rock", "paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return option[randIdx];

};
const drawGame = () => {
    
    msg.innerText = "game was draw.  Play again";
    msg.style.backgroundColor = "pink";

}
const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `you win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame =(userChoice) => {
    // console.log("user choice= ",userChoice);
    //generate computer choice.
    const compChoice = genCompChoice();
    // console.log("computer choice= ",compChoice);

    if(userChoice === compChoice){
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper 
            userWin= compChoice ==="paper"? false : true;
        }else if(userChoice === "paper"){
            //scissor, rock 
            userWin = compChoice ==="scissors"? false : true;
        }else{
            userWin = compChoice ==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

};


choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was cliked".userChoice);
        playGame(userChoice);
        
    });
});