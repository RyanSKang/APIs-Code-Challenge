// Start Section
var start=document.querySelector('#start');

// Guide Section
var guide=document.querySelector('#guide');
var exit=document.querySelector('#exit');
var continueBtn=document.querySelector('#continue');

// Highscore and Timer Section
var score=document.querySelector('#score');
var time=document.querySelector('#timer');
var exitBtn=document.querySelector('#hsExit');
var scoreMain=document.querySelector('#scoresheet');
var scoreBoard=document.querySelector('#scoreTitle');
var scoreQue=document.querySelector('#scoreQue');

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
var interval=0;
var timeLeft=60;

// Defining local storage array
var highscore=[];


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
    timeInterval= setInterval(function(){
        // as long as the timeLeft is greater than 1
        if (timeLeft>1){
            // Need to set the textContent of var 'time' to show the remaining seconds
            time.textContent='Timer: ' + timeLeft + ' s';
            timeLeft--;
        }else if(timeLeft>1 && index==questionArr.length){
            clearInterval(timeInterval);
        }
        else{
            //Need to clear out timer once it hits zero and bring to game over page 
            time.textContent='';
            clearInterval(timeInterval);
            if(index==questionArr.length){
            return;
            }else {
                gameOver();
            }
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

// Begin Quiz Function
function beginQuiz(){
    index=0;
    timeLeft=60
    quiz.style.display='block';
    guide.style.display='none';
    time.style.display='block';
    countDown();
    loadData();  
}
// Continue Btn addEventListener in Instructions
continueBtn.addEventListener('click', beginQuiz)

// Next question display after selection answer from previous question
choiceList.addEventListener('click', nextQuestion);   

function nextQuestion(event){
    if (event.target.textContent===questionArr[index].answer){
        totalPoints +=10;
    } else {
        timeLeft-=5;
    }
    index++;
    if(index<questionArr.length){
        loadData();
    } else{
        gameOver();
    }
    loadData();
}

// What happens when quiz is done
function gameOver(){
    quiz.style.display='none';
    time.style.display='none';
    result.style.display='block';  
    points.style.display='block'; 
    points.innerHTML= 'You got ' + totalPoints + ' points!';
}

// what happens when you submit name when quiz is done
submit.addEventListener('click',function(event){
// User Answer Value
console.log('submit clicked');
event.preventDefault();
var studentName=document.querySelector('#name').value; 
var userAns= {
name: studentName,
highscore: totalPoints,
}
// how to get local storage
highscore= JSON.parse(window.localStorage.getItem('userScores')) || [];

// how to push local storage array
highscore.push(userAns);

// how to set highscore by storing in local storage first
    localStorage.setItem("userScores", JSON.stringify(highscore))
})
// appendChild of localStorage to HTML

submit.addEventListener('click',quizComplete);

function quizComplete(){
    result.style.display='none';
    quiz.style.display='none';
    points.style.display='none';
    start.style.display='block';
}

score.addEventListener('click', function(event){
    highscore= JSON.parse(window.localStorage.getItem('userScores')) || [];
    console.log(highscore);
    start.style.display='none';
    scoreMain.style.display='grid';
    viewHighscore(highscore);
})
// making this variable in the global scope for the following functions
var highScoreSheet=document.querySelector('#scoresheet');

function viewHighscore(score){
    start.style.display='none';
    quiz.style.display='none';
    points.style.display='none';
    result.style.display='none';
    highScoreSheet.style.display='block';
    scoreBoard.innerHTML='ScoreBoard'
    exitBtn.style.display='flex';
    // highScoreSheet.textContent=(score[0].name + ': ' + score[0].highscore)
    for (i=0; i<highscore.length;i++){
        highScoreSheet.append(score[i].name + ': ' +  score[i].highscore);
    }
}

function homePage(){
scoreMain.style.display='none';
start.style.display='block';
}

exitBtn.addEventListener('click',homePage);
