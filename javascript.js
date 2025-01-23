function getComputerChoice() {
    let choice=Math.floor(Math.random()*3 +1);
    if (choice===1)
        return "rock";
    else if (choice===2)
        return "paper";
    else
        return "scissors";
}
function getHumanChoice() {
    let choice=prompt("Enter rock, paper or scissors:");
    choice=choice.toLowerCase();
    while(choice!=="rock" && choice!=="paper" && choice!="scissors")
        choice=prompt("Enter a valid choice:");
    return choice;
}
function playGame() {
    let humanScore=0, computerScore=0;
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="paper" && computerChoice==="rock" || humanChoice==="scissors" && computerChoice==="paper")
        {
            console.log("You win! "+humanChoice.at(0).toUpperCase()+humanChoice.slice(1)+" beats "+computerChoice.at(0).toUpperCase()+computerChoice.slice(1)+".");
            humanScore++;
        }
        else if (humanChoice===computerChoice)
        {
            console.log("Draw!");
        }
        else
        {
            console.log("You lose! "+computerChoice.at(0).toUpperCase()+computerChoice.slice(1)+" beats "+humanChoice.at(0).toUpperCase()+humanChoice.slice(1)+".");
            computerScore++;
        }
    }
    for (let i=0; i<5; i++)
        playRound(getHumanChoice(), getComputerChoice());
    if (humanScore>computerScore)
        console.log("You win the game!");
    else if (humanScore===computerScore)
        console.log("The game is a draw!");
    else
        console.log("You lost the game!");
}
playGame()