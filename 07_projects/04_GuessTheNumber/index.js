let ranmdomnum = Math.floor((Math.random()*100+1))
console.log(ranmdomnum)

const submit =document.querySelector('#subt');
const userInput =document.querySelector('#guessField');
const guessLot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');


const p = document.createElement('p')

let prevguess = [];

let numGuess =1

let playgame=true;

if (playgame) {
    submit.addEventListener('click' , function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number!")
    }else if(guess<1){
        alert("Please enter a number greater than 1 !")
    }else if(guess>100)
    {
        alert("Please enter a number less than 100!")
    }else{
        prevguess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over!! random number was ${ranmdomnum}`);
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === ranmdomnum){
        displayMessage(`You Guessed it Right !! Random number was ${ranmdomnum}`);
        endGame();
    }
    else if(guess < ranmdomnum){
        displayMessage(`Number is Too Low`);
    } 
    else if(guess > ranmdomnum){
        displayMessage(`Number is Too High`);
    }


}

function displayGuess(guess){
    userInput.value = '';
    guessLot.innerHTML +=`${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`

}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start a new Game </h2>`;
    startOver.appendChild(p);
    playgame= false;
    newGame();

}

function newGame(){
    const newGamebutton = document.querySelector('#newGame')
    newGamebutton.addEventListener('click',function (e){
        ranmdomnum = Math.floor((Math.random()*100+1));
        prevguess=[];
        numGuess=1;
        guessLot.innerHTML='';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame=true;

    })
}

