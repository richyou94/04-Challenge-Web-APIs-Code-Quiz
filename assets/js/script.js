var startBtn = document.querySelector(".startBtn");
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 100;
var aBtnEl = document.querySelector(".aBtn")

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    }, 1000);

    aBtnEl.addEventListener("click", function() {
        secondsLeft = secondsLeft - 10;
    })
}

startBtn.addEventListener("click", function() {
    initialBox.setAttribute("style", "display: none")
    quizBox.setAttribute("style", "display: block")
    setTime();
});

