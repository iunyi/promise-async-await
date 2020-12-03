/* 
- The user can enter a number.
- The system will pick a random number from 1 to 6.
- Inform whether number chosen by the use is equal / different to the random number.
- Specify it when the number chosen by the user is different from the random number by 1.
- User can decide to play the game as long as they want to
*/

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('Enter a number (1-6)'));
        const randomNumber = Math.floor(Math.random() * 6 + 1);
    
        if(isNaN(userNumber)) {
            reject(new Error('Wrong input type'));
        }

        if (randomNumber === userNumber) {
            resolve({
                randomNumber,
                gameResult: 'You guessed it!'
            })
        } else if (randomNumber === userNumber - 1 || randomNumber === userNumber + 1) {
            resolve({
                randomNumber,
                gameResult: 'You almost guessed it'
            })
        } else {
            resolve({
                randomNumber,
                gameResult: 'Better luck next time'
            })
        }
    });
};

const start = () => {
    handleGuess();
};

const handleGuess = async () => {
    try {
        const result = await enterNumber();
        alert(`Dice: ${result.randomNumber} - ${result.gameResult}`);
        tryAgain();

    } catch(error) {
        alert(error);
        tryAgain();
    }
};

const continueGame = async () => {
    return new Promise((resolve) => {
        if (window.confirm('Feel like trying one more time?')) {
            resolve(true);
        } else{
            resolve(false);
        }
    });
};

const tryAgain = async () => {
    const isContinuing = await continueGame();
    if(isContinuing) {
        handleGuess();
    } else {
        alert('See you next time!');
    }
}

start();
