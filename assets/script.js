var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-game");

var currentQuestion = document.getElementById("question");
// list ol that displays answer choices
var choicesList = document.getElementById("choices");
var result = document.getElementById("result");

var qCounter = 0;
var optionID = 1;

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

    // make and show current options/answers to choose from
    var listItemEl = document.createElement("li");
    listItemEl.className = "option";
    listItemEl.textContent = myQuestions[qCounter].answers.a;
    // add choice id as a custom attribute
    listItemEl.setAttribute("data-option-id", "a");

    choicesList.appendChild(listItemEl);
    listItemEl.addEventListener("click", isCorrect);

    var listItemEl = document.createElement("li");
    listItemEl.className = "option";
    listItemEl.textContent = myQuestions[qCounter].answers.b;
    // add choice id as a custom attribute
    listItemEl.setAttribute("data-option-id", "b");

    choicesList.appendChild(listItemEl);
    listItemEl.addEventListener("click", isCorrect);

    var listItemEl = document.createElement("li");
    listItemEl.className = "option";
    listItemEl.textContent = myQuestions[qCounter].answers.c;
    // add choice id as a custom attribute
    listItemEl.setAttribute("data-option-id", "c");

    choicesList.appendChild(listItemEl);
    listItemEl.addEventListener("click", isCorrect);

    var listItemEl = document.createElement("li");
    listItemEl.className = "option";
    listItemEl.textContent = myQuestions[qCounter].answers.d;
    // add choice id as a custom attribute
    listItemEl.setAttribute("data-option-id", "d");

    choicesList.appendChild(listItemEl);
    listItemEl.addEventListener("click", isCorrect);

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

    if (targetEl.getAttribute("data-option-id") === myQuestions[qCounter].correctAnswer) {
        console.log("correct!");
    }
    else {
        console.log("wrong! subtracting 10 seconds off of timer/score...");
    }

    qCounter++;

    console.log(qCounter);

    if (qCounter < 5) {
        showQuestion();
    }
    else {
        console.log("end of quiz!");
    }

};

startButton.addEventListener("click", hideInstructions);

setUp();