let wins = 0;
let losses = 0;
let guesses = 0;

let guessArray = ['a','b','c','d','e','f','g','h','i','j','k', 'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let compGuess = guessArray[Math.floor(Math.random() * guessArray.length)];

    console.log(compGuess);

for (i=guessArray; i<guessArray.length; i++)
    console.log(i);

document.onkeypress = function(event) {    
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guesses").innerHTML = "Guesses#: " + guesses;
    let userGuess = event.key;

    if (userGuess === compGuess) {
        wins++;
    }
    else {
        guesses++;
    }
    if (guesses === 15) {
        losses++;
    } 


};