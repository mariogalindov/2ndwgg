// 1. Array with bands
// 2. Define global variables
// 3. Generate a random band
// 4. Event grabs key (user guess)
// 5. Push tried key to guessed letters array
// 6. Replace every character of current band to underscores, store it in another var and insert it in DOM
// 5. Compare inserted key to current band and check if it's in the string
// 6. If it's not correct, substract 1 try from guesses left
// 7. If it's correct, push it to the underscored band var and replace the underscore for the letter(s) guessed correctly
// What about the spaces???? 

var bandArray = ["Alter Bridge", "Creed", "Bush", "Pearl Jam", "Metallica", "Audioslave", "Breaking Benjamin", "Trivium", "All That Remains", "Coheed and Cambria"];

function gameStart(){

    // console.log(typeof(userGuess));
    // } Aún no sé como pasarlo a variable global... tal vez tenga que encerrar todo en una función en la que se empieza el juego
    // console.log("User guess " + userGuess);
    // Definition of global variables
    var currentBand = bandArray[Math.floor(Math.random() * bandArray.length)];
    var underscoredBand = [];
    var arrayedBand = Array.from(currentBand.toLowerCase());
    console.log(arrayedBand);
    var guesses = [];
    var guessesLeft = 7;
    var wins = 0;
    DOMinitialText = document.getElementById("startingText");
    DOMunderscores = document.getElementById("bandSpace");
    DOMwins = document.getElementById("wins");
    DOMremaining = document.getElementById("guessesRemaining");
    DOMguesses = document.getElementById("lettersTried");

    console.log(currentBand);
    // console.log(typeof(currentBand));


    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        // console.log(typeof(userGuess));
        // First we check if the typed key hasn't been typed before
        if (guesses.indexOf(userGuess) === -1){
            console.log("key= " + userGuess);
            // We push the guess to the guesses array
            guesses.push(userGuess);
            // We then run the guessChecker function which will check if the typed key is in the arrayedBand array
            guessChecker(userGuess);
        }
        console.log(guesses);

        // If there aren't any underscores in the underscoredBand array you win 
        if (underscoredBand.indexOf("_") === -1){
            console.log("You won!")
            wins++;
            gameStart();
        }
        // Here we erease the greeting text with the initial key pressed
        DOMinitialText.style.display = "none";

        // DOMsetter();
    };

    function DOMsetter(){

    }

    function guessChecker(userGuess) {
        // If the user guess is included in the arrayed band 
        if (arrayedBand.includes(userGuess)) {
            // We run a loop to do the check for every element in the array, 
            // in other words every letter of the arrayedBand array which is the current band transformed
            // into an array with all the letters in lowercase
            for (i=0; i <arrayedBand.length; i++) {
                // If the guess is the same as the current element of the array...
                if (userGuess === arrayedBand[i]) {
                    console.log("It's the same");
                    console.log(underscoredBand[i]);
                    console.log(currentBand.indexOf(currentBand[i]))
                    console.log(currentBand[i]);
                    // underscoredBand[i].replace("_", currentBand[i]);
                    underscoredBand[i] = currentBand[i];
                    console.log(underscoredBand);
                // Just check that it effectively differenciate the characters of the currentBand from the guesses
                } else {
                    console.log("Nop")
                }
            }

        } else {
            guessesLeft--;
            console.log(guessesLeft);
            
        }

        DOMunderscores.innerHTML = underscoredBand;
        DOMwins.innerHTML = "Wins: " + wins;
        DOMremaining = "Guesses remaining: " + guessesLeft;
        DOMguesses = "Guesses so far: " + guesses;

    }
    // This function fills the underscoredBand array with the number of underscores 
    // corresponding to the length of the currentBand array
    function charReplacer(cBand) {
        for (i = 0; i < cBand.length; i++) {
            underscoredBand.push("_");
        }
        console.log(underscoredBand);
    }
    charReplacer(currentBand);

}

gameStart();
