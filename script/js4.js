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

//Exercise 2
function generateRandomArray(length) {
    const randomNumbers = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        randomNumbers.push(randomNum);
    }
    return randomNumbers;
}
//Example of 10 randomly generated numbers
console.log(generateRandomArray(10));