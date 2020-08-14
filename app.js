//connecting images to script
document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;

function user(){
    var userChoice = this.id;
    document.getElementById("userInput").innerHTML = ("You chose: " + userChoice)

//defining computer's choices so they are all equally likely
    var computer = Math.random();
        if (computer < 0.34) {
            computer = "rock";
        } else if(computer <= 0.67) {
            computer = "paper";
        } else {
            computer = "scissors";
    };
    document.getElementById("computerInput").innerHTML = ("Computer chose: " + computer);
    document.getElementById("result").innerHTML = (compare(userChoice, computer));
//function that compares user choice and computer choice
    function compare(choice1, choice2) {
        if(choice1 === choice2) {
            return "<b>Tie! Try again.</b>";
        }
        if(choice1 === "rock") {
            if(choice2 === "scissors") {
                return "<b>Rock wins.</b>";
            } else {
                return "<b>Paper wins.</b>";
            }
        }
        if(choice1 === "paper") {
            if (choice2 === "rock") {
                return "<b>Paper wins.</b>";
            } else {
                if (choice2 === "scissors") {
                    return "<b>Scissors wins.</b>";
                }
            }
        }
        if(choice1 === "scissors") {
            if (choice2 === "rock") {
                return "<b>Rock wins.</b>";
            } else {
                if (choice2 === "paper") {
                    return "<b>Scissors wins.</b>";
                }
            }
        }
    }
}

