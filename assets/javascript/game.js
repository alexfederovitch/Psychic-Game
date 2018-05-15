    let wins = 0;
    let losses = 0;
    let attempts = 9;
    let computerGuess;
    let userGuess;
    let guesses = [];

        //This function calls the game function once a key is pressed
        document.onkeyup = function(event) {
            game();
        }

        function game(){
            computerGuess = String.fromCharCode(Math.floor(Math.random(25) * Math.floor(25) + 97));
            //The computer picks a letter
            userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            //The user picks a letter
            guesses.push(userGuess);

                if (userGuess === computerGuess) {
                    wins++;
                    alert("You Win")
                    document.getElementById("wins").innerHTML = "Wins: " + wins;
                    document.getElementById("guess").innerHTML = "Guesses so far: " + guesses;
                    document.getElementById("attempts").innerHTML = "Attempts remaining: " + attempts;
                    reset();
                }
                else if (attempts === 0) {
                    losses++;
                    alert("Sorry! You lost.  Please try again")
                    document.getElementById("losses").innerHTML = "Losses: " + losses;
                    reset();
                }
                else if (userGuess !== computerGuess){
                    attempts--;
                    document.getElementById("guess").innerHTML = "Guesses so far: " + guesses;
                    document.getElementById("attempts").innerHTML = "Attempts remaining: " + attempts;
                }

        function reset(){
            attempts = 9;
            guesses.length = 0;
            attempts = 9;
        }
            
      
            //This code was for testing
            // console.log(computerGuess); 
            // console.log(userGuess);
            // console.log("Wins: " + wins);
            // console.log("Losses: " + losses);
            // console.log("Attempts: " + attempts);
            // console.log("Current guesses: " + guesses)

        }