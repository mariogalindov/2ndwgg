// 1. Array with bands
// 2. Define global variables
// 3. Generate a random band
// 4. Event grabs key
// 5. Push tried key to guessed letters array
// 6. Replace every character of current band to underscores, store it in another var and insert it in DOM
// 5. Compare inserted key to current band and check if it's in the string
// 6. If it's not correct, substract 1 try from guesses left
// 7. If it's correct, push it to the underscored band var and replace the underscore for the letter(s) guessed correctly
// What about the spaces???? 

var bandArray = ["Alter Bridge", "Creed", "Bush", "Pearl Jam", "Metallica", "Audioslave", "Breaking Benjamin", "Trivium", "All That Remains", "Coheed and Cambria"];

var userGuess = 
document.onkeyup = function(event) {
    userGuess = event.key;
    console.log("key= " + userGuess);

}; // falta insertar key del evento
console.log(userGuess);
var currentBand = bandArray[Math.floor(Math.random() * bandArray.length)];
var underscoredBand = "";
var guessesLeft = 7;
console.log(currentBand);
function charReplacer(cBand) {
    for (i = 0; i < currentBand.length; i++) {
        underscoredBand = currentBand[i].replace(currentBand[i] ,"_");
        console.log(underscoredBand);
    }
    console.log(underscoredBand);
} 
charReplacer(currentBand);