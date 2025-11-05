//Exercise 1
function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;

    console.log("Guess a number between 1 and 10!");

    while (guess !== randomNumber) {
        guess = Number(prompt("Your guess: "));

        if (guess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Correct! The number was " + randomNumber);
        }
    }
}

guessNumberGame();