var startBtn = document.querySelector(".startBtn");
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 100;
var aBtnEl = document.querySelector(".aBtn")
var setOne = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
var setTwo = ["qOne", "aOne", "iaTwo", "iaThree", "iaFour"]
var setThree = ["qOne", "aOne", "iaTwo", "iaThree", "iaFour"]
var setFour = ["qOne", "aOne", "iaTwo", "iaThree", "iaFour"]
var arraySets = [setOne, setTwo, setThree, setFour]
var questionEl = document.querySelector(".multiple-choice-title")
var choiceOne = document.querySelector(".aBtn")
var choiceTwo = document.querySelector(".bBtn")
var choiceThree = document.querySelector(".cBtn")
var choiceFour = document.querySelector(".dBtn")

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
    }, 1000);

    
}

startBtn.addEventListener("click", function() {
    initialBox.setAttribute("style", "display: none")
    quizBox.setAttribute("style", "display: block")
    initialQuestion();
    setTime();
});

function checkAnswer(a, b) {
    
}

function initialQuestion() {
    questionEl.textContent = setOne[0];
    choiceOne.textContent = setOne[1];
    choiceTwo.textContent = setOne[2];
    choiceThree.textContent = setOne[3];
    choiceFour.textContent = setOne[4];

}