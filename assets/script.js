var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-game");

var currentQuestion = document.getElementById("question");
// list ol that displays answer choices
var choicesList = document.getElementById("choices");
var result = document.getElementById("result");

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
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
};

function hideInstructions() {
    title.textContent = "";
    instructions.textContent = "";
    startButton.style.display = "none";
    startQuiz();
};

function startQuiz() {
    // show current question
    currentQuestion.textContent = "Question 1";

    var listItemEl = document.createElement("li");
    listItemEl.className = "option";

    listItemEl.textContent = "answer option 1";

    choicesList.appendChild(listItemEl);

};

startButton.addEventListener("click", hideInstructions);

setUp();