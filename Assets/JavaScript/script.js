// Start Section
var start=document.querySelector('#start');

// Guide Section
var guide=document.querySelector('#guide');
var exit=document.querySelector('#exit');
var continueBtn=document.querySelector('#continue');

// Highscore and Timer Section
var score=document.querySelector('#score');
var time=document.querySelector('#timer');

// Main Quiz Content
var quiz=document.querySelector('#quiz');
var questionNo=document.querySelector('#questionNo');
var questionText=document.querySelector('#questionText');

var option1=document.querySelector('#option1');
var option2=document.querySelector('#option2');
var option3=document.querySelector('#option3');
var option4=document.querySelector('#option4');

// Correct or Wrong!
var correct=document.querySelector('#correct');
var correct=document.querySelector('#wrong');

// Result Section
var points=document.querySelector('#totalPoints');
var result=document.querySelector('#results');
var submit=document.querySelector('#submit');
var totalPoints=10;

// Get all option from optionList
var choiceQue=document.querySelector(".choice_que");
var index=0;
var timeLeft=60;

// User Answer Value
var userAns= undefined;

// Start btn Event Listener
