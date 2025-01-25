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
let buttons=document.querySelector(".buttons");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let result=document.querySelector(".result");
function playGame() {
    let humanScore=0, computerScore=0;
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice==="rock" && computerChoice==="scissors" || humanChoice==="paper" && computerChoice==="rock" || humanChoice==="scissors" && computerChoice==="paper")
        {
            ++humanScore;
            result.textContent="You win! "+humanChoice.at(0).toUpperCase()+humanChoice.slice(1)+" beats "+computerChoice.at(0).toUpperCase()+computerChoice.slice(1)+". ("+humanScore+" vs "+computerScore+")";
        }
        else if (humanChoice===computerChoice)
        {
            result.textContent="Draw! ("+humanScore+" vs "+computerScore+")";
        }
        else if (computerChoice==="rock" && humanChoice==="scissors" || computerChoice==="paper" && humanChoice==="rock" || computerChoice==="scissors" && humanChoice==="paper")
        {
            ++computerScore;
            result.textContent="You lose! "+computerChoice.at(0).toUpperCase()+computerChoice.slice(1)+" beats "+humanChoice.at(0).toUpperCase()+humanChoice.slice(1)+". ("+humanScore+" vs "+computerScore+")";
        }
    }
    buttons.addEventListener("click", (e) => {
        switch (e.target){
        case rock:
            playRound("rock", getComputerChoice())
            break;
        case paper:
            playRound("paper", getComputerChoice())
            break;
        case scissors:
            playRound("scissors", getComputerChoice())
            break;
        }
        if (humanScore===5 && computerScore===5)
        {
            result.textContent="The game ends in a draw."
            humanScore=0;
            computerScore=0;
        }
        else if (humanScore>=5)
        {
            result.textContent="You win the game!"
            humanScore=0;
            computerScore=0;
        }
        else if (computerScore>=5)
        {
            result.textContent="You lose the game!"
            humanScore=0;
            computerScore=0;
        }
    })

}
playGame()