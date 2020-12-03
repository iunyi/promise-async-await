/* 
- The user can enter a number.
- The system will pick a random number from 1 to 6.
- Inform whether number chosen by the use is equal / different to the random number.
- Specify it when the number chosen by the user is different from the random number by 1.
- User can decide to play the game as long as they want to
*/

const start = async () => {
    try {
        const result = await enterNumber();
        alert(`Dice: ${result.randomNumber} - ${result.message}`);
        continueGame();

    } catch (error) {
        alert(error);
        if (error === 'Wrong type input') {
            continueGame();
        }
    }
};

const enterNumber = async () => {
    return await new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('Enter a number (1-6)'));
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        // Reject
        if (isNaN(userNumber)) {
            reject('Wrong type input');
        } else if (!userNumber) {
            reject('Cancelled game');
            
        // Resolve
        } else if (userNumber === randomNumber) {
            resolve({
                randomNumber,
                message: 'You guessed it!'
            });
        } else if (
            userNumber === randomNumber + 1 || 
            userNumber === randomNumber - 1) {
            resolve({
                randomNumber,
                message: 'You almost guessed it'
            });
        } else {
            resolve({
                randomNumber,
                message: 'Better luck next time'
            });
        }
    });
};

const continueGame = async () => {
    return await new Promise(resolve => {
        if (window.confirm('Feel like trying again?')) {
            resolve(start());
        } else {
            resolve(alert('See you!'));
        }
    });
};

start();