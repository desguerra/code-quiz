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
    instructions.textContent = "Try to answer the following JavaScript-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
};

function hideInstructions() {
    title.textContent = "";
    instructions.textContent = "";
    title.style.display = "none";
    instructions.style.display = "none";
    startButton.style.display = "none";
    startQuiz(myQuestions);
};

function startQuiz(questions) {

    for (var i=0; i < questions.length; i++) {
        // show current question
        currentQuestion.textContent = questions[i].question;

        // make and show current options/answers to choose from
        var listItemEl = document.createElement("li");
        listItemEl.className = "option";
        listItemEl.textContent = questions[i].answers.a;
        // add choice id as a custom attribute
        listItemEl.setAttribute("data-option-id", "a");

        choicesList.appendChild(listItemEl);

        var listItemEl = document.createElement("li");
        listItemEl.className = "option";
        listItemEl.textContent = questions[i].answers.b;
        // add choice id as a custom attribute
        listItemEl.setAttribute("data-option-id", "b");

        choicesList.appendChild(listItemEl);

        var listItemEl = document.createElement("li");
        listItemEl.className = "option";
        listItemEl.textContent = questions[i].answers.c;
        // add choice id as a custom attribute
        listItemEl.setAttribute("data-option-id", "c");

        choicesList.appendChild(listItemEl);

        var listItemEl = document.createElement("li");
        listItemEl.className = "option";
        listItemEl.textContent = questions[i].answers.d;
        // add choice id as a custom attribute
        listItemEl.setAttribute("data-option-id", "d");

        choicesList.appendChild(listItemEl);

        //// TESTING ////
        console.log(choicesList);

        if (i === 0) {
            break;
        }
        //////////////////

    }

};

function isCorrect() {

};

startButton.addEventListener("click", hideInstructions);

setUp();