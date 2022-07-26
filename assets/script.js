var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-game");

var currentQuestion = document.getElementById("question");
// list ul that displays answer choices
var choicesList = document.getElementById("choices");
var result = document.getElementById("result");

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
    listItemEl.className = "";

    listItemEl.textContent = "answer option 1";

    choicesList.appendChild(listItemEl);

};

startButton.addEventListener("click", hideInstructions);

setUp();