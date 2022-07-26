var startQuiz = document.getElementById("start-game");

var currentQuestion = document.getElementById("question");
var choicesList = document.getElementById("choices");
var result = document.getElementById("result");

var title = document.getElementById("title");
var instructions = document.getElementById("instructions");

function setUp() {
    title.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
};

// var instructions = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

function displayQuiz() {
    instructions.textContent = "";
    title.textContent = "";
};

startQuiz.addEventListener("click", displayQuiz);

setUp();