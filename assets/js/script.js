var startBtn = document.querySelector(".startBtn");
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        // if statement
    }, 1000);
}

startBtn.addEventListener("click", function() {
    initialBox.setAttribute("style", "display: none")
    quizBox.setAttribute("style", "display: block")
    setTime();
});