var startBtn = document.querySelector(".startBtn");
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 75;

var aBtnEl = document.querySelector(".aBtn")
var bBtnEl = document.querySelector(".bBtn")
var cBtnEl = document.querySelector(".cBtn")
var dBtnEl = document.querySelector(".dBtn")

var setOne = ["Commonly used data types DO NOT include:", "1. strings", "2. booleans", "3. alerts", "4. numbers"]
var setTwo = ["The condition in an if / else statement is enclosed within", "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
var setThree = ["Arrays in Javascript can be used to store ______.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
var setFour = ["String values must be enclosed within __________ when being assigned to variables.", "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var setFive = ["A very useful tool used during development and debugging for printing content to the debugger is: ", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"]


var arraySets = [setOne, setTwo, setThree, setFour, setFive]

var questionEl = document.querySelector(".multiple-choice-title")



function setTime() {
        timerInterval = setInterval(function() {
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


aBtnEl.addEventListener("click", function() {
    clearInterval(timerInterval);
    console.log(aBtnEl.textContent)
})
bBtnEl.addEventListener("click", function() {
    clearInterval(timerInterval);
})
cBtnEl.addEventListener("click", function() {
    clearInterval(timerInterval);
})
dBtnEl.addEventListener("click", function() {
    clearInterval(timerInterval);
})



function checkAnswer(a, b) {
    
}

function initialQuestion() {
    questionEl.textContent = setOne[0];
    choiceOne.textContent = setOne[1];
    choiceTwo.textContent = setOne[2];
    choiceThree.textContent = setOne[3];
    choiceFour.textContent = setOne[4]; 
}