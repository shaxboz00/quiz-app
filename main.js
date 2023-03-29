const  son1 = document.querySelector(".son1");
const  amal = document.querySelector(".amal");
const  son2 = document.querySelector(".son2");
const  javob1 = document.querySelector(".javob1");
const  javob2 = document.querySelector(".javob2");
const  javob3 = document.querySelector(".javob3");
const  javob4 = document.querySelector(".javob4");
const level = document.querySelector("h1");
const restart = document.querySelector("button");


let levelNumber = 1;
let correctAnswers = 0;

function nextLevel() {
  levelNumber++;
  if (levelNumber <= 10) {
    level.innerText = "Level - " + levelNumber;
    resetProblem();
  } else {
    level.innerText = "Winner!";
    alert("yuttingiz! oyini qaytadan boshlang");
    restart.classList.add("btn"); 
    restart.addEventListener("click", function () {
    
        restart.classList.remove("btn");
        
    });
  }
}


function resetProblem() {
    
let randomNumber = Math.floor(Math.random() * (300 - (-100)) + -100);
let randomNumber1 = Math.floor(Math.random() * (300 - (-100)) + -100);

son1.innerText = randomNumber;
son2.innerText = randomNumber1;

amal.innerText = "";
const amallar = '*+-';
const sonlar =  Math.floor(Math.random() * amallar.length);

amal.innerText += amallar[sonlar];

function getnumber(son1,son2) {
   let num = 0;
   if(amal.innerText == '*'){
      return num = son1 * son2;
   }
   if(amal.innerText == '+'){
      return num = +son1 +  +son2;
   }
   if(amal.innerText == '-'){
       return num = son1 - son2;
   }

   return num;
}

let nums = getnumber(+son1.innerText, +son2.innerText);
const case1 = [javob1,javob2,javob3,javob4];
const case2 = Math.floor(Math.random() * case1.length);

case1.forEach((element) => {
       element.style.background = "white";
       element.innerText = "";
});

case1[case2].addEventListener('click', () => {
   
      case1[case2].style.background =  'green'
      correctAnswers++;
      setTimeout(nextLevel, 1000);


});



case1[case2].innerText += nums;


if (case1[case2] == case1[0]) {
 case1[1].innerText = Math.floor(Math.random() * 58) - 22
case1[2].innerText = Math.floor(Math.random() * 58) - 22
 case1[3].innerText = Math.floor(Math.random() * 58) - 22}

if (case1[case2] == case1[1]) {
 case1[0].innerText = Math.floor(Math.random() * 58) - 22
 case1[2].innerText = Math.floor(Math.random() * 58) - 22
   case1[3].innerText = Math.floor(Math.random() * 58) - 22}

   if (case1[case2] == case1[2]) {
     case1[1].innerText = Math.floor(Math.random() * 58) - 22
   case1[0].innerText = Math.floor(Math.random() * 58) - 22
     case1[3].innerText = Math.floor(Math.random() * 58) - 22}
 
     if (case1[case2] == case1[3]) {
       case1[1].innerText = Math.floor(Math.random() * 58) - 22
     case1[2].innerText = Math.floor(Math.random() * 58) - 22
       case1[0].innerText = Math.floor(Math.random() * 58) - 22}

}

resetProblem();






