
//Array of questions to be tied into the function

var questions = [
    {
        title: "When are curly brakcets used?",
        choices: ["what is a function", "what is an eventListener?", "what is a log?", "what is more delicious then pudding"],
        answer: "what is a function"
    },
    {
        title: "What is used to put java script into html?",
        choices: ["what is a script?", "What is js?", "what is java?", "what is a pinch of salt?"],
        answer: "what is a script?"
    },
    {
        title: "Where do you put the javascript in the html?",
        choices: ["What is the body?", "What is the chrome dome?", "What is the footer?", "What is the header?"],
        answer: "What is the body?"
    },
    {
        title: "Does java have a boiler plate?",
        choices: ["What is absolutely!", "What is for certain!", "What is 100%.", "What is NO."],
        answer: "What is NO."
    },
    {
        title: "What symbol is used to identify classes in java?",
        choices: ["What is #?", "What is a period.", "what is @?", "What is ^?"],
        answer: "What is a #?"
    },
    {
        title: "How do you call a function in  java?",
        choices: ["What are parentheses?", "What is a ! ?", "What is a % ?", "What is a bullseye 🎯?"], 
        answer: "What are parantheses?"
    },

];

var questionDiv = document.getElementById("questions-div");
var questionsDisplay = document.getElementById("questions-display");
var startBtn = document.getElementById("start");
var intro = document.getElementById("intro");
var checker = document.getElementById("check");

//button variables
var answer0 = document.getElementById("btn0");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");


//event listeners
answer0.addEventListener("click", chose0);
answer0.addEventListener("click", chose1);
answer0.addEventListener("click", chose2);
answer0.addEventListener("click", chose3);


startBtn.addEventListener("click", startQ);

function startQ() {

    questionIndex = 0;
    intro.style.display = "none";
    startBtn.style.display = "none";
    questionDiv.style.display = "block";
}


//display questions
function addQuestions() {
    questionsDisplay.textContent = questions[questionIndex].title;

}

//answers functions

function chose0() {answerChecker(0);}
function chose1() {answerChecker(1);}
function chose2() {answerChecker(2);}
function chose3() {answerChecker(3);}


function answerChecker(answer) {
    checker.style.display ="block";
  
}