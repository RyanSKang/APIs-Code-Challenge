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
start.addEventListener('click',()=>{
    start.style.display='none';
    guide.style.display='block';
})

// Exit Btn Event Listener in Instructions
exit.addEventListener('click', ()=> {
    start.style.display='block';
    guide.style.display='none';
})

// Creating Timer for Quiz when it begins
function countDown(){
    var timeInterval= setInterval(function(){
        // as long as the timeLeft is greater than 1
        if (timeLeft > 1){
        // Need to set the textContent of var 'time' to show the remaining seconds
            time.textContent= timeLeft + ' seconds remaining';
            timeLeft--;
        }else if (timeLeft===1){
            time.textContent=timeLeft = 'second remaining';
            timeLeft--;
        //Need to clear out timer once it hits zero and bring to game over page 
        }else{
            time.textContent='';
            clearInterval(timeInterval);
            gameOver();
        }
    },1000);
}

// Need to set up question function
var loadData=()=>{
    questionNo.innerText= index + 1 + ". "
    questionText.innerText= questionArr[index].question;
    option1.innerText= questionArr[index].choice1;
    option2.innerText= questionArr[index].choice2;
    option3.innerText= questionArr[index].choice3;
    option4.innerText= questionArr[index].choice4;

    time=60;
}
loadData();

// Continue Btn addEventListener in Instructions
continueBtn.addEventListener('click', () =>{
    quiz.style.display='block';
    guide.style.display='none';
    time.style.display='flex';

    interval.setInterval(countDown, 1000);
    loadData();
})