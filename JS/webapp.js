
//variables are taken under class fields in html below 
const QueNo = document.querySelector(".que-no");
const QueText = document.querySelector(".que-text");
const OptCon = document.querySelector(".opt-cont");
const ResInd = document.querySelector(".res-ind");
const expInd = document.querySelector(".explanation");
const EXP = document.querySelector(".Exp");
const hintInd = document.querySelector(".hint");
const homePage = document.querySelector(".home-page");
const Time = document.querySelector(".time-left");
const quizPage = document.querySelector(".quiz-page");
const resPage = document.querySelector(".result-page");
const Next = document.querySelector(".NEXT");
const Scored = document.querySelector(".scored ");
const SubmitInd = document.querySelector(".submit ");
const quelimit = 5;



let questioncount = 0;
let currentquestion;
let NoOfquestions = [];
let NoOfoptions =[];
let Exp = [];
let Hints = [];
let correctOptions=0;
let attempt = 0;
let count = 11;
let countdown;




//set/push  questions into NoOfquestion array
function setNumberOfQuestions()
{
    const totalquestion = quelimit;
    for(let i=0;i<totalquestion;i++)
    {
      NoOfquestions.push(quiz[i])
    }
      
}
function getnewquestion()
{
    //get question number
    QueNo.innerHTML = "Q :  " + (questioncount + 1) + "  of  " + quelimit  ;
    count=11;
    clearInterval(countdown);
    timerDisplay();
    /* get question 
    & get  randomly(Dynamic)*/
    const QueIn = NoOfquestions[Math.floor(Math.random()*NoOfquestions.length)]
    const index1  = NoOfquestions.indexOf(QueIn);
    //console.log(index1)
    //  removing index1 from QueIn so that no question an repeat 
    NoOfquestions.splice(index1,1);
    //console.log(QueIn)
    //console.log(NoOfquestions)
   currentquestion = QueIn;
   //show imges if question having image based questions
   
   // check  no of options for question obtained
   const optlen = currentquestion.options.length
   //console.log(optlen)
   QueText.innerHTML = currentquestion.q;
   if(currentquestion.hasOwnProperty("img"))
      {
         const IMG = document.createElement("img");
         IMG.src = currentquestion.img;
         QueText.appendChild(IMG);
      }
   //same for options as we did for questions 
   //push options into NoOfoptions array
   for(let i=0;i<optlen;i++)
   {
    NoOfoptions.push(i)
   }    
   OptCon.innerHTML = '';
   let animationDelay = 0.1;
   // html form (options)
   for(let i=0;i<optlen;i++)
{
       const OptInd = NoOfoptions[Math.floor(Math.random()* NoOfoptions.length)];
    //get the position of option index from NoOfoptions
       const index2 = NoOfoptions.indexOf(OptInd);
       //here same as we did for question remove the options index from NoOfoptions array such that it doesn't repeat again 
       NoOfoptions.splice(index2,1);      
       const option = document.createElement("div");
       //displaying options randomly from NoOfoptions:: array 
       option.innerHTML = currentquestion.options[OptInd];
       option.id = OptInd;
       //options appeearing one by one on display by 0.1s
       option.style.animationDelay = animationDelay + "s";
       animationDelay = animationDelay  +  0.1 ;      
       option.className = "opt";
       OptCon.appendChild(option)
       option.setAttribute('onclick','getResult(this)');

   }

   questioncount++;   
}
//set time display and count down 
const timerDisplay = () =>
   {
      countdown = setInterval(() =>
      {
         count--;
         Time.innerHTML = `${count}s`;
         if (count == 0)
         {
            //set count down to zero if times up i.e time == 0
            clearInterval(countdown);
            //set to next question if times up
            next();
         }
      },1000);
   }
//to store an selected option in data and verify its correct or wrong 
function getResult(element){
   const id = parseInt(element.id) ;
   //verify section of correct answers based on onclick option id 
   if(id === currentquestion.a){
       //set up a green color to the  correct answers in options
       //so here set a new class name for correct ansers option
       element.classList.add("correct"); 
       //add the indicator to correct mark\
       updateResInd("correct");
       EXP.classList.remove("hide");
       correctOptions++;
       //console.log("correct" + correctOptions)
       //set count down to zero 
       clearInterval(countdown);
       //call timer function top display the time  even if user  attempts the answer
       timerDisplay();
        
   }
   else 
   {
    // same method for wrong answers with red color
    element.classList.add("wrong");
   
    //here explanation of correct answer displayed when user clicks on wrong option
    explanation();
    //add the indicator to wrong mark 
    updateResInd("wrong");
     //if user choosed wrong option then display correct option
     const optionlen = OptCon.children.length;
     for(let i = 0;i<optionlen;i++)
     {
        if(parseInt(OptCon.children[i].id) === currentquestion.a)
        {
            OptCon.children[i].classList.add("correct");    
            clearInterval(countdown);
            //here there is no timer display function beacuse user  should know the explanation of correxct option
            
        }
   }

   restrictUser();
   }    
   
   attempt++;

}
   //setting up usercan only gone for options  only once
   function restrictUser()
   {
     const optionLen = OptCon.children.length;
     for (let i = 0;i<optionLen ;i++)
     {
        OptCon.children[i].classList.add("option-choosed");
     }
   }
   function resultIndicator()
   {
     ResInd.innerHTML="";
     const noofquestions = quelimit;
     for(let i=0;i<noofquestions;i++)
        {
            const indicator = document.createElement("div");
            ResInd.appendChild(indicator);
        } 
   }

   function updateResInd(markType)
   {
     ResInd.children[questioncount-1].classList.add(markType) 
   }
    
 function hint()
 {
  //here user gets an hint based on given question
  const Hint = currentquestion.hint;
  hintInd.classList.remove("hide");
  hintInd.classList.add("sanserif");
  hintInd.innerHTML = "Hint :"+  Hint;
 }
 function explanation()
 {
   //here user can get explaantion of the correct answer
   const Exp = currentquestion.exp;
   expInd.classList.remove("hide");
   expInd.classList.add("sanserif");
   expInd.innerHTML = "Explanation:" + Exp;
 }

function next()
{ 
   hintInd.classList.add("hide");
   //hide the review button 
   EXP.classList.add("hide");
   //hide the explanation of previous question
   expInd.classList.add("hide");
   

   //here for randomized question if count is equal to 5 then 
   if(questioncount === (quelimit))
   {
    //console.log("Enough Numeber Of Questions");
    //hide next button in the last question
   Next.classList.add("hide");
    //show submit button to submit answers  
    SubmitInd.classList.remove("hide");
   }
   //else obtain new question from NoOfQuestion using function below
   else{
    getnewquestion();

   }
}
 

function finishQuiz()
{
    // close the quiz page 
    quizPage.classList.add("hide");
    //show result page
    resPage.classList.remove("hide");
    quizScore();
}
function quizScore()
{
    resPage.querySelector(".no-of-questions").innerHTML=quelimit;
    resPage.querySelector(".no-of-attempted").innerHTML=attempt;
    resPage.querySelector(".no-of-correct").innerHTML=correctOptions;
    resPage.querySelector(".no-of-Wrong").innerHTML=attempt-correctOptions;
    const percentage = (correctOptions/quelimit)*100;
    resPage.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "";
    resPage.querySelector(".score").innerHTML= correctOptions + "/" + quelimit;
    Scored.innerHTML = "You Have Scored " + correctOptions + " Out Of " + quelimit;
    }
function resetQuiz()
{
 questioncount=0;
   correctOptions=0;
   attempt=0;
}
function tryAgain()
{
   //hde result page 
   resPage.classList.add("hide");
   //show quiz page 
   quizPage.classList.remove("hide");
   resetQuiz();
   startQuiz();
} 
function goHome()
{
//hide result page
resPage.classList.add("hide");
//show home page when user click on go home 
homePage.classList.remove("hide");

}   
function startQuiz()
{
   //hide homepage when user click on start button 
   homePage.classList.add("hide");
   //show quizpage 
   quizPage.classList.remove("hide");
    //here we first set all questions into NoOfquestions array 
    setNumberOfQuestions();
    //here we call below function to obtain a new question
    getnewquestion();
    //to give user response to the option selected 
    resultIndicator();
}
window.onload = function()
{
 
  homePage.querySelector(".total-question").innerHTML = quelimit;
}