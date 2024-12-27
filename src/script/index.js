// selecciones el contenedor principla del juego

const gameContainer = document.querySelector('.container');
const allmoleItems = document.querySelectorAll('.item');

// Carga los sonidos

const whackSound = new Audio('../assets/sound/whack.mp3');
const backgoundMusic = new Audio('../assets/sound/music.mp3');
backgoundMusic.loop = true;
backgoundMusic.volume = 0.3;

// variable para gestionar el juego

let startGame = startTime;
let countDown = 0;
let score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count');
const starButton = document.getElementById('start-game');
const restartButton = document.getElementById('restart-game');

starButton.addEventListener('click', () => {
    startGameLogic();
    starButton.style.display = 'none';
    restartButton.style.display = 'none';
    backgoundMusic.play();
});

restartButton.addEventListener('click', () => {
    resetGame();
    starButton.style.display = 'block';
    restartButton.style.display = 'none';
    backgoundMusic.play();

});

gameContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains("mole-clicked"){
        whackSound.currentTime = 0;
        whackSound.play();
        score++;
        scoreCount.innerHTML = score;

        const bushElement = e.target.parentNode.previousElementSibling;
        let textElement = document.createElement("text");
        textElement.setAttribute("class", "whack-text");
        textElement.innerHTML = "Whack!";
        bushElement.appendChild(textElement);





    }




});