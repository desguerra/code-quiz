var scoresLinkEl = document.getElementById("view-scores");
var timerEl = document.getElementById("timer");

var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-game");

var currentQuestion = document.getElementById("question");
// list ol that displays answer choices
var choicesList = document.getElementById("choices");
var result = document.getElementById("result");
result.className = "result";

var listItemEl1 = document.createElement("li");
listItemEl1.className = "option";
var listItemEl2 = document.createElement("li");
listItemEl2.className = "option";
var listItemEl3 = document.createElement("li");
listItemEl3.className = "option";
var listItemEl4 = document.createElement("li");
listItemEl4.className = "option";

var doneContent = document.getElementById("done-content");
var finalScoreMsg = document.createElement("p");
var initialsForm = document.createElement("form");
var highScoresList = document.createElement("ol");
highScoresList.className = "choices";
var newScore = document.createElement("li");

// var goBackButton = document.createElement("button");
// var clearScoresButton = document.createElement("button");

var qCounter = 0; // question counter
var optionID = 1; // id for each option/choice
var timeLeft = 50; // start timer at 50
var gameEnded = false; // if game is over, then `true`

const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "commas",
            d: "parenthesis"
        },
        correctAnswer: "a"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "d"
    }
];

/* FUNCTIONS */

/* countdown timer function */
function countdown() {
    
    var timeInterval = setInterval(function () {
        if (timeLeft > 1 && gameEnded) {
            timerEl.textContent = "Time left: " + timeLeft;
        }
        else if (timeLeft > 1) {
            // TODO: if timer is greater than 1 AND if game ended
            timerEl.textContent = "Time left: " + timeLeft;
            timeLeft--;
        } // otherwise, if there is no time left, don't display the timer and cancel the timer
        else {
            timerEl.textContent = "";
            gameEnded = true;
            endOfQuiz();
            clearInterval(timeInterval);
        }
    }, 1000);
};

/* function to initialize/set up page on first load */
function setUp() {
    title.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Try to answer the following JavaScript-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
};

/* hide instructions before showing first question */
function hideInstructions() {
    title.textContent = "";
    instructions.textContent = "";
    title.style.display = "none";
    instructions.style.display = "none";
    startButton.style.display = "none";

    countdown();
    showQuestion();
};

/* show one question at a time */
function showQuestion() {

    // show current question
    currentQuestion.textContent = myQuestions[qCounter].question;

    // show current options/answers to choose from //

    listItemEl1.textContent = myQuestions[qCounter].answers.a;
    // add choice id as a custom attribute
    listItemEl1.setAttribute("data-option-id", "a");
    choicesList.appendChild(listItemEl1);
    listItemEl1.addEventListener("click", isCorrect);

    
    listItemEl2.textContent = myQuestions[qCounter].answers.b;
    // add choice id as a custom attribute
    listItemEl2.setAttribute("data-option-id", "b");
    choicesList.appendChild(listItemEl2);
    listItemEl2.addEventListener("click", isCorrect);

    
    listItemEl3.textContent = myQuestions[qCounter].answers.c;
    // add choice id as a custom attribute
    listItemEl3.setAttribute("data-option-id", "c");
    choicesList.appendChild(listItemEl3);
    listItemEl3.addEventListener("click", isCorrect);

    
    listItemEl4.textContent = myQuestions[qCounter].answers.d;
    // add choice id as a custom attribute
    listItemEl4.setAttribute("data-option-id", "d");
    choicesList.appendChild(listItemEl4);
    listItemEl4.addEventListener("click", isCorrect);

    //// TESTING ///////////////////////
    console.log(choicesList);

    // if answer is correct, say "correct"
    // else, say "wrong" AND subtract 10 seconds off of the timer/score
    // no matter what the user picks, go to next question

    // after the last question is answered OR if the timer
    // gets to 0 -> go to the Final Score display (game over)

    //////////////////////////////////////////////////////////

};

/* check if user's choice is the correct answer */
function isCorrect(event) {

    // get target element from event
    var targetEl = event.target;
    var userAnswer = targetEl.getAttribute("data-option-id");

    if (userAnswer === myQuestions[qCounter].correctAnswer) {
        result.textContent = "Correct!";
        result.className = "result result-show";

        console.log("correct!");
    }
    else {
        result.textContent = "Wrong!";
        result.className = "result result-show";
        timeLeft -= 10;

        console.log("wrong! subtracted 10 off of score/timer...");
    }

    qCounter++;

    if (qCounter < 5 && timeLeft > 0) {
        showQuestion();
    }
    else {
        gameEnded = true;
        endOfQuiz();
    }

};

/* when the game ends, show player score and ask them to input their initials */
function endOfQuiz() {
    gameEnded = true;

    console.log("end of quiz!");

    localStorage.setItem("playerTime", timeLeft);
    var scoreInStorage = localStorage.getItem("playerTime");

    choices.textContent = "";
    choices.style.display = "none";

    // display end of quiz results
    question.textContent = "All done!";

    finalScoreMsg.textContent = "Your final score is " + scoreInStorage + ".";
    doneContent.appendChild(finalScoreMsg);

    initialsForm.innerHTML = '<label for="initials">Enter initials:</label> <input type="text" id="initials" name="initials"> <button type="submit" class="btn submit-btn" id="submit-button">Submit</button>';

    doneContent.appendChild(initialsForm);

    console.log(initialsForm);
    console.log(document.querySelector("input[name='initials']").value);

    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", handleAddToScores);
};

/* add scores to high score list */
function handleAddToScores(event) {

    event.preventDefault();

    gameEnded = true;

    // TODO: create object for each player (name and score), and store in localStorage

    ///// if adding new score, add - otherwise, just display high scores (continue)
    // select `input` text tag with name="initials" and grab the value
    // var initialsInput = document.querySelector("input[name='initials']").value;
    // console.log(initialsInput);

    //console.log(document.querySelector("input[name='initials']").value);

    


    displayScoreboard();

};

function displayScoreboard() {
    // add score to scoreboard
    console.log("HIGH SCORES LIST");

    doneContent.textContent = "";

    title.style.display = "none";
    instructions.style.display = "none";
    startButton.style.display = "none";
    choices.style.display = "none";

    result.style.display = "none";
    question.textContent = "High Scores";

    // get initials and score from local storage
    newScore.textContent = "[name] - " + localStorage.getItem("playerTime");

    // show scoreboard from local storage in doneContent
    // doneContent = high scores in order
    highScoresList.appendChild(newScore);
    doneContent.appendChild(highScoresList);

    // TODO: DISPLAY ALL SCORES IN LOCAL STORAGE SO FAR
};


// start quiz when user clicks the start button
startButton.addEventListener("click", hideInstructions);

// click to view high scores
scoresLinkEl.addEventListener("click", handleAddToScores);

setUp();