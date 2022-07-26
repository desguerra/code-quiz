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
var optionID = 1; // id ffor each option/choice

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

function setUp() {
    title.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Try to answer the following JavaScript-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
};

function hideInstructions() {
    title.textContent = "";
    instructions.textContent = "";
    title.style.display = "none";
    instructions.style.display = "none";
    startButton.style.display = "none";
    showQuestion();
};

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
        console.log("wrong! subtracting 10 seconds off of timer/score...");
        // TODO: add code for timer
    }

    qCounter++;

    console.log(qCounter);

    if (qCounter < 5) { // AND if timer > 0
        showQuestion();
    }
    else {
        console.log("end of quiz!");
        endOfQuiz();
    }

};

function endOfQuiz() {
    choices.textContent = "";
    choices.style.display = "none";

    // display end of quiz results
    question.textContent = "All done!";
    finalScoreMsg.textContent = "Your final score is [timer value].";
    doneContent.appendChild(finalScoreMsg);

    initialsForm.innerHTML = '<label for="initials">Enter initials:</label> <input type="text" id="initials" name="initials"> <button type="submit" class="btn submit-btn" id="submit-button">Submit</button>';
    // enterInit.textContent = "Enter initials: ";
    // initialsForm.appendChild(enterInit);

    // initialsForm.appendChild(textbox);
    // initialsForm.appendChild(submitButton);

    doneContent.appendChild(initialsForm);

    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", addToScores);
};

function addToScores() {
    // make sure to hide result text
    result.style.display = "none";

    // add score to scoreboard
    console.log("testing scores list!!");

    // display scoreboard
    question.textContent = "High Scores";
    doneContent.textContent = "";

    newScore.textContent = "[name] - [score]";

    highScoresList.appendChild(newScore);
    doneContent.appendChild(highScoresList);

}

startButton.addEventListener("click", hideInstructions);

setUp();

// TODO: make results disappear after 2000 ms?