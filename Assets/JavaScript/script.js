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
var choiceList=document.querySelector('#optionList');

var option1=document.querySelector('#option1');
var option2=document.querySelector('#option2');
var option3=document.querySelector('#option3');
var option4=document.querySelector('#option4');

// Correct or Wrong!
var correct=document.querySelector('#correct');
var correct=document.querySelector('#wrong');

// Result Section
var points=document.querySelector('#points');
var result=document.querySelector('#results');
var submit=document.querySelector('#submit');
var totalPoints=0;

// Get all option from optionList
var choiceQue=document.querySelector(".choice_que");
var index=0;
var timeLeft=60;
var interval=0;
var currentQuestion=0

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
            time.textContent='Timer: ' + timeLeft + ' seconds remaining';
            timeLeft--;
        }else if (timeLeft===1){
            time.textContent='Timer: ' + timeLeft + 'second remaining';
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
function loadData(){
    questionNo.innerText= index + 1 + ". "
    questionText.innerText= questionArr[index].question;
    option1.innerText= questionArr[index].choice1;
    option2.innerText= questionArr[index].choice2;
    option3.innerText= questionArr[index].choice3;
    option4.innerText= questionArr[index].choice4;
}
loadData();

// Begin Quiz Function
function beginQuiz(){
    quiz.style.display='block';
    guide.style.display='none';
    countDown();
    
}
// Continue Btn addEventListener in Instructions
continueBtn.addEventListener('click', beginQuiz)

//Check Answer 
function checkAnswer(){
    if(choiceList===questionArr[index].answer){
        totalPoints=totalPoints + 10
    } 
}

// Next question display after selection answer from previous question
choiceList.addEventListener('click', nextQuestion);   

function nextQuestion(event){
    if (event.target.textContent===questionArr[currentQuestion].answer){
        totalPoints +=10;
    } else {
        if (timeLeft >=5){
            timeLeft=timeLeft - 5;
            time.textContent='Timer: ' + timeLeft + ' seconds remaining';
            countDown();
        }
    }
    currentQuestion++;
    // if (currentQuestion==questionArr.length){
    //     clearInterval(interval);
    //     gameOver();
    // } else{
    //     loadData()
    // }
    index++;
    loadData();
}

// What happens when quiz is done
function gameOver(){
    quiz.style.display='none';
    result.style.display='block';  
    points.style.display='block'; 
    points.innerHTML= 'You got ' + totalPoints + ' points!';
}