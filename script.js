const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const scoreField = document.querySelector('.score-number');
const highScoreField = document.querySelector('.high-score-number');
const guessedNumber = document.querySelector('.guessed-number');
const numberInput = document.querySelector('.number-input');
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;

scoreField.textContent = score;
highScoreField.textContent = highScore;

function showMessage(msgText){
    document.querySelector('.message').textContent = msgText;
}
checkButton.addEventListener('click', function(){
    const guessNumber = Number(numberInput.value);

    if(!guessNumber){
        showMessage('No number!');
    }else if(guessNumber === secretNumber){
        showMessage('Correct number!');
        guessedNumber.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > highScore){
            highScore = score;
            highScoreField.textContent = highScore;
        }
    }else if(guessNumber !== secretNumber){
        if(score > 1){
            showMessage(guessNumber > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            scoreField.textContent = score;
        }else{
            showMessage('You lose the game!')
            scoreField.textContent = 0;
        }
    }
});
againButton.addEventListener('click', function(){
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    showMessage('Start guessing...');
    scoreField.textContent = score;
    guessedNumber.textContent = '?';
    numberInput.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});