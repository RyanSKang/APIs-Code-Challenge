// ---------Defined Variables---------
var startBtn= document.querySelector('#start');
var questionEL=document.querySelector('#questions');
var questionArr=[
    {
        question: 'What does DOM stand for?',
        choices: ['Document Object Model','Document Object Manipulation','Destroyer of Matter','Document of Main Elements'],
        answers:'A'
    }, {
        question: 'Question 2',
        choices: ['A','B','C','D'],
        answers:'A'
    }, {
        question: 'Question 3',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 4',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 5',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 6',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 7',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 8',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 9',
        choices: ['A','B','C','D'],
        answers:'A'
    },{
        question: 'Question 10',
        choices: ['A','B','C','D'],
        answers:'A'
    }
]
var question=document.querySelector('#questionnaire');
var index=0
var choices=document.querySelector('#choices');
var timerEl=document.querySelector('#timer');
// -----------Defined Functions---------------
function showQuestions(){
    question.textContent=questionArr[index].question;
    choices.innerHTML='';
    for (var i=0; i<4; i++){
        var answerBtn= document.createElement('button');
        answerBtn.textContent=questionArr[index].choices[i];
        answerBtn.addEventListener('click',nextQuestion)
        choices.appendChild(answerBtn);
    }
}

function nextQuestion(){
    index++;
    showQuestions()
}

function beginQuiz(){
    questionEL.style.display="block";
    startBtn.style.display='none';
    showQuestions();
}
function countDown() {
    var timeLeft= 15;
    var timeInterval= setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent= timeLeft = ' seconds remaining';
            timeLeft--;
        }else if (timeLeft===1){
            timerEl.textContent=timeLeft + ' second remaining';
            timeLeft--;
        }else {
            timerEl.textContent='';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}
// --------------Event Listeners---------------
startBtn.addEventListener('click',beginQuiz)