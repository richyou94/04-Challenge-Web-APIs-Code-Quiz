
//****************   Variables   ****************//
// Variable for Boxes
var initialBox = document.querySelector(".coding-quiz-container");
var quizBox = document.querySelector(".multiple-choice-container");
var resultBox = document.querySelector(".ending-container");
var scoreBox = document.querySelector(".highScore-container");


// Variable for Buttons
var startBtn = document.querySelector(".startBtn");
var submitBtn = document.querySelector(".submit-button");
var goBackBtn = document.querySelector(".goBackBtn");
var clearBtn = document.querySelector(".clearBtn");
var highScoreBtn = document.querySelector("#viewHighscore");
// Variable for each multiple choice Buttons
var aBtnEl = document.querySelector(".aBtn");
var bBtnEl = document.querySelector(".bBtn");
var cBtnEl = document.querySelector(".cBtn");
var dBtnEl = document.querySelector(".dBtn");


// Variable for message of submissioon success / error
var msgDiv = document.querySelector("#msg");

// variable for adding list item of high score logs
var highScoreList = document.querySelector(".highscore-list");

// Variables related to timer
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 75;
var myTimeout;

// Variable for log message when its get incorrect or correct
var messageLog = document.querySelector(".message");
var messageBox = document.querySelector(".logMessage");

// Variable for result boxes
var resultMessage = document.querySelector(".resultLog");
var finalScoreEl = document.querySelector(".finalScore");
var finalScore = 100;


// Variable for sets of multiple questions and answers
var setOne = ["Commonly used data types DO NOT include:", 
"1. strings", "2. booleans", "3. alerts", "4. numbers"];
var setTwo = ["The condition in an if / else statement is enclosed within", 
"1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"];
var setThree = ["Arrays in Javascript can be used to store ______.", 
"1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var setFour = ["String values must be enclosed within __________ when being assigned to variables.", 
"1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var setFive = ["A very useful tool used during development and debugging for printing content to the debugger is: ", 
"1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"];
var setSix = ["What does HTML stand for?", 
"1. Hyper Text Markup Language", "2. Hyperlinks and Text Markup Language", "3. Home Tool Markup Language", "4. None of the above"];
var setSeven = ["Who is making the Web standards?", 
"1. Mozilla", "2. The World Wide Web Consortium", "3. Google", "4. Microsoft"];
var setEight = ["Choose the correct HTML element for the largest heading:",
"1. <heading>", "2. <head>", "3. <h6>", "4. <h1>"];
var setNine = ["What is the correct HTML element for inserting a line break?",
"1. <break>", "2. <br>", "3. <lb>", "4. <hr>"];
var setTen = ["What is the correct HTML for adding a background color?",
'1. <body style="background-color:yellow;">', '2. <background>yellow</background>', '3. <body bg="yellow">', '4. None of the above'];
var setEleven = ["What is the correct HTML for creating a hyperlink?", 
'1. <a>http://www.w3schools.com</a>', '2. <a href="http://www.w3schools.com">W3Schools</a>', '3. <a url="http://www.w3schools.com">W3Schools.com</a>', '4. <a name="http://www.w3schools.com">W3Schools.com</a>'];
var setTwelve = ["What does CSS stand for?", 
"1. Cascading Style Sheets", "2. Creative Style Sheets", "3. Computer Style Sheets", "4. Colorful Style Sheets"];
var setThirteen = ["Which HTML attribute is used to define inline styles?",
"1. style", "2. styles", "3. class", "4. font"];
var setFourteen = ["Which CSS property controls the text size?",
"1. text-style", "2. font-size", "3. text-size", "4. font-style"];
var setFifteen = ["How do you select an element with id 'demo'?", 
"1. .demo", "2. demo", "3. *demo", "4. #demo"];
var setSixteen = ["What is the default value of the position property?",
"1. relative", "2. static", "3. fixed", "4. absolute"];
var setSeventeen = ["Inside which HTML element do we put the JavaScript?",
"1. <js>", "2. <script>", "3. <scripting>", "4. <javascript>"];
var setEighteen = ["How do you make each word in a text start with a capital letter?",
"1. You can't do that with CSS", "2. text-transform:capitalize", "3. text-style:capitalize", "4. transform:capitalize"];
var setNineteen = ["How do you write 'Hello World' in an alert box?",
"1. alert('Hello World');", "2. msg('Hellow World');", "3. msgBox('Hello World');", "4. alertBox('Hello World');"];
var setTwenty = ["How to write an IF statement in JavaScript?",
"1. if i == 4 then", "2. if i = 5 then", "3. if (i == 5)", "4. if i = 5"];


// Total array for whole question sets
var arraySets = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setTen, setEleven, setTwelve, setThirteen, setFourteen, setFifteen, setSixteen, setSeventeen, setEighteen, setNineteen, setTwenty];

// variable for question (empty at beginning)
var questionEl = document.querySelector(".multiple-choice-title");

// variable of array of sets of question to match with correct answer later
var answerSheetQuestion = ["Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within", 
"Arrays in Javascript can be used to store ______.", 
"String values must be enclosed within __________ when being assigned to variables.",
"A very useful tool used during development and debugging for printing content to the debugger is: ",
"What does HTML stand for?",
"Who is making the Web standards?",
"Choose the correct HTML element for the largest heading:",
"What is the correct HTML element for inserting a line break?",
"What is the correct HTML for adding a background color?",
"What is the correct HTML for creating a hyperlink?", 
"What does CSS stand for?", 
"Which HTML attribute is used to define inline styles?",
"Which CSS property controls the text size?",
"How do you select an element with id 'demo'?", 
"What is the default value of the position property?",
"Inside which HTML element do we put the JavaScript?",
"How do you make each word in a text start with a capital letter?",
"How do you write 'Hello World' in an alert box?",
"How to write an IF statement in JavaScript?",
];
// variable of array of correct answers to match with questions' array
var answerSheetAnswer = [
    "3. alerts",
    "3. parenthesis",
    "4. all of the above",
    "3. quotes",
    "4. console.log",
    "1. Hyper Text Markup Language",
    "2. The World Wide Web Consortium",
    "4. <h1>",
    "2. <br>",
    '1. <body style="background-color:yellow;">',
    '2. <a href="http://www.w3schools.com">W3Schools</a>',
    "1. Cascading Style Sheets",
    "1. style",
    "2. font-size",
    "4. #demo",
    "2. static",
    "2. <script>",
    "2. text-transform:capitalize",
    "1. alert('Hello World');",
    "3. if (i == 5)"
];

// variable for finding correct answers of current state
var currentQuestion;
var currentAnswer;
var isTrue;

// variables for array of highscores' initial and scores
var initialList = [];
var initialScoreList = [];

// variable for findnig the current status whether initial, quiz, result, or scores
var statusBox = "initial";

//****************   functions   ****************//
// function for creating list item of highscores log
function renderLastRegistered() {
    highScoreList.innerHTML = "";

    if (initial == "") {
    return;    
    } else {
        for (var i = 0; i < initialList.length; i++) {
            var itemEl = initialList[i];
            var scoreEl = initialScoreList[i];

            var li = document.createElement("li");
            li.textContent = `${itemEl} : ${scoreEl}`;
            li.setAttribute("data-index", i);
            highScoreList.appendChild(li);
        }
    };
};

//function for hiding the message with delayed time for each answering button
function hideLogMessage() {
    myTimeout = setTimeout(function() {
        messageBox.setAttribute("style", "display:none");
    }, 2000);
};
//function for terminating the timeout function, to restart the delayed message
function terminateTimeOut() {
    clearTimeout(myTimeout);
};
// function for setting timer from 75 seconds to 0. reaching to 0 or below will
// clear Interval the timer. 
function setTime() {
    secondsLeft = 75;
    timeLeft.textContent = secondsLeft;
        timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            // console.log("TIMEOUT")
            clearInterval(timerInterval);
            quizBox.setAttribute("style", "display:none");
            resultBox.setAttribute("style","display:block");
            resultMessage.textContent = "TIMEOUT!";
            finalScore = 0;
            finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
            arraySets = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setTen, setEleven, setTwelve, setThirteen, setFourteen, setFifteen, setSixteen, setSeventeen, setEighteen, setNineteen, setTwenty];
            statusBox = "result";   
        }
    }, 1000);    
};
//function for minus timer whenever the answer is incorrect
function minusTime() {
    secondsLeft = secondsLeft - 15;
    timeLeft.textContent = secondsLeft;
};
// function for displaying the message when submission is failed.
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
};
// function for stopping the timer
// and make secondsLeft into zero seconds (I want to fix this part because I want to make timer stays paused when I get passed)
// it resets the question array sets for new quiz
// change status into "result" 
function doneQuiz() {
    clearInterval(timerInterval);
    secondsLeft = 0;
    // timeLeft.textContent = secondsLeft;
    arraySets = [setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setTen, setEleven, setTwelve, setThirteen, setFourteen, setFifteen, setSixteen, setSeventeen, setEighteen, setNineteen, setTwenty];
    quizBox.setAttribute("style", "display:none;");
    resultBox.setAttribute("style", "display:block");
    statusBox = "result";
};
// function for checking answer if its correct(true) or not (false)
function checkAnswer(btn) {
    if (currentAnswer === btn.textContent) {
        isTrue = true;
    } else {
        isTrue = false;
    }
};
// function for creating question from question setArrays
// it randomized number from length of questions left
// with the randomized number it provides the textContent for each question and answers
// splice the array of that question with same random number I received at beginning
function setQuestion() {
    var randomNum = Math.floor(Math.random() * arraySets.length);
    console.log(arraySets.length);
    var selectedArray = arraySets[randomNum];
    
    questionEl.textContent = selectedArray[0];
    aBtnEl.textContent = selectedArray[1];
    bBtnEl.textContent = selectedArray[2];
    cBtnEl.textContent = selectedArray[3];
    dBtnEl.textContent = selectedArray[4]; 

    currentQuestion = arraySets[randomNum][0];
    currentAnswer = answerSheetAnswer[
    answerSheetQuestion.indexOf(currentQuestion)
    ];
    arraySets.splice(randomNum, 1);
    displayMessage("", "");
    console.log(arraySets.length);
};

//****************   Button add Event Listener   ****************//
// button for viewing the Highscores Log
highScoreBtn.addEventListener("click", function() {
    initialBox.setAttribute("style", "display:none;");
    quizBox.setAttribute("style", "display:none;");
    resultBox.setAttribute("style", "display:none;");
    scoreBox.setAttribute("style", "display:block;");
});
// button for going back to previous box that was shown
// it resets the final score to 100 when the status is in "score"
// also resets to status into "initial"
goBackBtn.addEventListener("click", function() {
    // console.log(arraySets);
    scoreBox.setAttribute("style", "display:none");
    if (statusBox === "initial") {
        initialBox.setAttribute("style", "display:block");
        // console.log(statusBox)
    } else if (statusBox === "quiz") {
        quizBox.setAttribute("style", "display:block");
        // console.log(statusBox)
    } else if (statusBox === "result") {
        resultBox.setAttribute("style", "display:block");
        // console.log(statusBox);
    } else if (statusBox === "scores") {
        initialBox.setAttribute("style", "display:block");
        // console.log(statusBox)
        statusBox = "initial";
        finalScore = 100;
        // console.log(statusBox);
    }
});
// button for clearing the list of highscores with initial and scores
clearBtn.addEventListener("click", function() {
    highScoreList.innerHTML = "";
    initialList = [];
});
// button for starting the quiz, it sets the questions and answers
// and set Timer 
// and change status into "quiz"
// and emptied the initial text box of form
startBtn.addEventListener("click", function() {
    statusBox = "quiz";
    initialBox.setAttribute("style", "display: none");
    quizBox.setAttribute("style", "display: block");
    setQuestion();
    setTime();
    document.querySelector("#initial").value = "";
    // console.log(statusBox);
});
// button for submitting the highscores with initial
// it shows error message when nothing is inputted
// it rendered the registered items of highscores list
// it changes status into "scores"
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var initial = document.querySelector("#initial").value;

    if (initial === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "Submitted successfully");
        initialList.push(initial);
        initialScoreList.push(finalScore);
        // localStorage.setItem("initial", initial);
        // localStorage.setItem("score", finalScore);
        renderLastRegistered();
        resultBox.setAttribute("style", "display:none;");
        scoreBox.setAttribute("style", "display: block;");
        statusBox = "scores";
        // console.log(statusBox);
    }
});
//A~D Button for answering the question
// if answer is correct
//      if leftover question array sets are empty
//          it goes into result box with the final score
//      if its not empty
//          reset the timeOut function for terminating the delayed function
//          make new questions and answer with leftover question sets
// if answer if incorrect when timer is less than or equal to 15
//          Timed out for the quiz
//          finalscore will become zero
//          it activaties the doneQuiz function
// if answer is incorrect with more than 15 seconds left
//          it shows that answer is incorrect
//          it activates the minusTime function to minus 15 seconds from timer
//          calculate the final score by (1/totalquestiono) * 100
////////// A Button //////////
aBtnEl.addEventListener("click", function() {
    // console.log(currentQuestion);
    // console.log(currentAnswer);
    // console.log(this.textContent)
    checkAnswer(this);
    // console.log(isTrue);
    ///
    
    if (isTrue === true) {
        if (arraySets == "") {
            // console.log("no more question")
            resultMessage.textContent = "Well Done!";
            finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
            doneQuiz();
        } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block;");
        messageLog.textContent = "Correct!";
        hideLogMessage();
        // console.log(messageLog.textContent)
        setQuestion(); }
    } else if (secondsLeft <=15 && isTrue === false) {
        resultMessage.textContent = "TIMEOUT!";
        finalScore = 0;
        finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
        secondsLeft = 0;
        timeLeft.textContent = secondsLeft;
        doneQuiz();
    } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block")
        messageLog.textContent = "Incorrect. Please try it again.";
        minusTime();
        finalScore = finalScore - (1/answerSheetQuestion.length) * 100;
        hideLogMessage();
    }
    // console.log(arraySets);
});
////////// B Button //////////
bBtnEl.addEventListener("click", function() {
     // console.log(currentQuestion);
    // console.log(currentAnswer);
    // console.log(this.textContent)
    checkAnswer(this);
    // console.log(isTrue);
    ///
    
    if (isTrue === true) {
        if (arraySets == "") {
            // console.log("no more question")
            resultMessage.textContent = "Well Done!";
            finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
            doneQuiz();
        } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block;");
        messageLog.textContent = "Correct!";
        hideLogMessage();
        // console.log(messageLog.textContent)
        setQuestion(); }
    } else if (secondsLeft <=15 && isTrue === false) {
        resultMessage.textContent = "TIMEOUT!";
        finalScore = 0;
        finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
        secondsLeft = 0;
        timeLeft.textContent = secondsLeft;
        doneQuiz();
    } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block")
        messageLog.textContent = "Incorrect. Please try it again.";
        minusTime();
        finalScore = finalScore - (1/answerSheetQuestion.length) * 100;
        hideLogMessage();
    }
    // console.log(arraySets);
});
////////// C Button //////////
cBtnEl.addEventListener("click", function() {
     // console.log(currentQuestion);
    // console.log(currentAnswer);
    // console.log(this.textContent)
    checkAnswer(this);
    // console.log(isTrue);
    ///
    
    if (isTrue === true) {
        if (arraySets == "") {
            // console.log("no more question")
            resultMessage.textContent = "Well Done!";
            finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
            doneQuiz();
        } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block;");
        messageLog.textContent = "Correct!";
        hideLogMessage();
        // console.log(messageLog.textContent)
        setQuestion(); }
    } else if (secondsLeft <=15 && isTrue === false) {
        resultMessage.textContent = "TIMEOUT!";
        finalScore = 0;
        finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
        secondsLeft = 0;
        timeLeft.textContent = secondsLeft;
        doneQuiz();
    } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block")
        messageLog.textContent = "Incorrect. Please try it again.";
        minusTime();
        finalScore = finalScore - (1/answerSheetQuestion.length) * 100;
        hideLogMessage();
    }
    // console.log(arraySets);
});
////////// D Button //////////
dBtnEl.addEventListener("click", function() {
    // console.log(currentQuestion);
    // console.log(currentAnswer);
    // console.log(this.textContent)
    checkAnswer(this);
    // console.log(isTrue);
    ///
    
    if (isTrue === true) {
        if (arraySets == "") {
            // console.log("no more question")
            resultMessage.textContent = "Well Done!";
            finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
            doneQuiz();
        } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block;");
        messageLog.textContent = "Correct!";
        hideLogMessage();
        // console.log(messageLog.textContent)
        setQuestion(); }
    } else if (secondsLeft <=15 && isTrue === false) {
        resultMessage.textContent = "TIMEOUT!";
        finalScore = 0;
        finalScoreEl.textContent = `Your final score is ${finalScore} / 100`;
        secondsLeft = 0;
        timeLeft.textContent = secondsLeft;
        doneQuiz();
    } else {
        terminateTimeOut();
        messageBox.setAttribute("style", "display:block")
        messageLog.textContent = "Incorrect. Please try it again.";
        minusTime();
        finalScore = finalScore - (1/answerSheetQuestion.length) * 100;
        hideLogMessage();
    }
    // console.log(arraySets);
});

// functions that  activates from the beginning. 
renderLastRegistered();
