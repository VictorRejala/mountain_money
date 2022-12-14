var randomNumber = Math.floor(Math.random() * 100) + 1;
var allTry = 7;
var actualTry = 0;
var infoGame = document.getElementById("infoGame");
var infoTry = document.getElementById("infoTry");
var win = false;
const musicWinner = new Audio("music/public_congratulations.mp3");
const musicLoser = new Audio("music/loser.mp3");

function checkNumber() {

    let inputNumber = document.getElementById("number").value;
    
    if(inputNumber == randomNumber) {

        infoGame.innerHTML = "Você ganhou! O numero pensado realmente é " + randomNumber + "<br> Clique em Reiniciar para jogar de novo"; 
        infoGame.style.color="green";
        win = true;
        musicWinner.volume="0.1";
        musicWinner.play();
    } else if (inputNumber > randomNumber && inputNumber < 101) {

        infoGame.innerHTML = "O seu chute foi maior que o esperado";
        actualTry ++;
    } else if (inputNumber < randomNumber && inputNumber > 0) {

        infoGame.innerHTML = "O seu chute foi menor que o esperado";
        actualTry ++;   
    } else {
        infoGame.innerHTML = "Insira um numero entre 1 e 100";
    }

    if (actualTry >= allTry) {
        infoGame.innerHTML="Você perdeu! O numero pensado era " + randomNumber + "<br> Clique em Reiniciar para jogar de novo";
        infoGame.style.color="red";
        actualTry = 7;
        musicLoser.volume="0.1";
        musicLoser.play();
    }        
}

function attInfo() {
    
    infoTry.innerHTML = ("Você tem " + (allTry - actualTry) + " chances - " + actualTry + "/" + allTry);

    if (actualTry == allTry || win) {
        infoTry.innerHTML = "";
    }
}

function playRandomNumber() {

    event.preventDefault();

    if(win) {
        infoGame.innerHTML = "Você ganhou! O numero pensado realmente é " + randomNumber + "<br> Clique em Reiniciar para jogar de novo"; 
        infoGame.style.color="green"
    } else {
        checkNumber();
    }
    attInfo();    
    inputNumber = document.getElementById("number");
    inputNumber.value="";
}

function restartGame() {

    actualTry = 0;
    win = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    infoTry.innerHTML="Você tem 7 chances";
    infoGame.innerHTML="Boa sorte";
    infoGame.style.color="white";
    musicLoser.volume="0";
    musicWinner.volume="0";
}


/*var buttonPlay = document.querySelector("#play");

buttonPlay.addEventListener("click", function(event){

    event.preventDefault();
    
    if(win) {
        infoGame.innerHTML = "Você ganhou! O numero pensado realmente é " + randomNumber + "<br> Clique em Reiniciar para jogar de novo"; 
        infoGame.style.color="green"
    } else {
        checkNumber();
    }
    attInfo();    
    inputNumber = document.getElementById("number");
    inputNumber.value=""; 
});

var buttonRestart = document.querySelector("#restart");

buttonRestart.addEventListener("click", function(event){

    event.preventDefault();
    location.reload();
})

var testNumber = 0;*/