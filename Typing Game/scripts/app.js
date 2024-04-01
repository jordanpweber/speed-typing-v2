'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot',
    'building', 'population', 'weather', 'bottle', 'history', 'dream', 'character', 
    'money', 'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow',
    'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 
    'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
    'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 
    'agency', 'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge',
    'magician', 'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 
    'evolution', 'banana', 'perfumer', 'computer', 'management', 'discovery', 
    'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 
    'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language', 
    'homework', 'fantastic', 'economy', 'interview', 'awesome', 'challenge', 
    'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet', 
    'software', 'update', 'yellow', 'keyboard', 'window'];

    let currentWord;
    let score = 0;
    let timeLeft = 99; // unit is seconds by default
    let isPlaying = false;
    let timerInterval;

    const wordDisplay = document.getElementById('word-display');
    const wordInput = document.getElementById('word-input');
    const startBtn = document.getElementById('start-btn');
    const timeLeftDisplay = document.getElementById('time-left');
    const hitsDisplay = document.getElementById('hits');
    const restartBtn = document.getElementById('restart-btn');
    const finalScoreDisplay = document.getElementById('final-score');
    const backgroundMusic = document.getElementById('background-music');
    
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    wordInput.addEventListener('input', checkWord);

    function startGame() {
        score = 0;
        hitsDisplay.textContent = score;
        startTimer();
        displayRandomWord();
        isPlaying = true;
        backgroundMusic.play();
    }
    function restartGame() {
         window.location.reload();
    }
    
    function checkWord() {
        const typedWord = wordInput.value.trim();
        if (typedWord === currentWord) {
            score++;
            hitsDisplay.textContent = score;
            displayRandomWord();
            wordInput.value = ''; 
        }
    }

    function displayRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex];
        wordDisplay.textContent = currentWord;
    }

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = 99;
        updateTimeLeftDisplay();
        timerInterval = setInterval(function() {
            timeLeft--;
            updateTimeLeftDisplay();
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function updateTimeLeftDisplay() {
        timeLeftDisplay.textContent = timeLeft;
    }

    function endGame() {
        clearInterval(timerInterval);
        isPlaying = false;
        document.getElementById('final-score-value').textContent = score;
        finalScoreDisplay.classList.remove('hidden');
        restartBtn.classList.remove('hidden');
        startBtn.classList.add('hidden');
        backgroundMusic.pause();
    }
});

