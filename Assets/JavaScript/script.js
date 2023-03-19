var startBtn= document.querySelector('#start');
var question1=document.querySelector('#question-1');
var questionArr=[
    {
        question: 'Question 1',
        choices: ['A','B','C','D'],
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
    }
]
var question=document.querySelector('#questionnaire');
var index=0
var choices=document.querySelector('#choices');

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
    question1.style.display="block";
    startBtn.style.display='none';
    showQuestions();
}
startBtn.addEventListener('click',beginQuiz)