const problem = document.getElementById('problem');
const myAnswer = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const level = document.getElementById('level');


let questionAmount = 0;
let rightQuestions = 0;
let difficulty = 9;
let minimumnumber = 1;
let levelamount = 1;
let levels = 1;

let nummer1 = getNumber();
let nummer2 = getNumber();
let nummer3 = getNumber();
let theAnswer;

problem.innerHTML = getProblem();
level.innerHTML = "Level: " + levelamount;

addEventListener('keydown',(e)=>{
  switch (e.keyCode) {
    case 13:
      giveFeedBack();
    break;
  }
})

function getProblem() {
  switch (levels) {
    case 1:
      theAnswer = nummer1 * nummer2;
      let ans0 = nummer1 + "*" + nummer2 + "= " + "?";
      return ans0;
      break;
    case 2:
      theAnswer = nummer1 * nummer2;
      let ans1 = nummer1 + "*" + "?" + "= " + theAnswer;
      return ans1;
      break;
    case 3:
      theAnswer = nummer1 * nummer2 + nummer3;
      let ans2 = nummer1 + "*" + nummer2 + "+" + nummer3 + "= " + "?";
      return ans2;
      break;
    case 4:
      theAnswer = nummer1 * nummer2 + nummer3;
      let ans3 = nummer1 + "*" + "?" + "+" + nummer3 + "= " + theAnswer;
      return ans3;
      break;
  }

}

function getNumber() {
  let nummers = Math.floor(Math.random()*difficulty)+minimumnumber;
  return nummers;
}

function giveFeedBack() {
  switch (levels) {
    case 1:
      if(myAnswer.value == theAnswer){
        feedback.innerHTML = "Je hebt het goed";
        rightQuestions++;
      } else {
        feedback.innerHTML = "Helaas je hebt het fout";
      }
      nummer1 = getNumber();
      nummer2 = getNumber();
      theAnswer = nummer1 * nummer2;
      break;
    case 2:
      if(myAnswer.value == nummer2){
        feedback.innerHTML = "Je hebt het goed";
        rightQuestions++;
      } else {
        feedback.innerHTML = "Helaas je hebt het fout";
      }
      nummer1 = getNumber();
      nummer2 = getNumber();
      theAnswer = nummer1 * nummer2;
      break;
    case 3:
      if(myAnswer.value == theAnswer){
        feedback.innerHTML = "Je hebt het goed";
        rightQuestions++;
      } else {
        feedback.innerHTML = "Helaas je hebt het fout";
      }
      nummer1 = getNumber();
      nummer2 = getNumber();
      nummer3 = getNumber();
      theAnswer = nummer1 * nummer2 + nummer3;
      break;
    case 4:
      if(myAnswer.value == nummer2){
        feedback.innerHTML = "Je hebt het goed";
        rightQuestions++;
      } else {
        feedback.innerHTML = "Helaas je hebt het fout";
      }
      nummer1 = getNumber();
      nummer2 = getNumber();
      nummer3 = getNumber();
      theAnswer = nummer1 * nummer2 + nummer3;
      break;
  }
  questionAmount++;
  score.innerHTML = "Je hebt " + rightQuestions + "/" + questionAmount + " goed";
  DifficultyIncrease();
  myAnswer.value = "";

  problem.innerHTML = getProblem();
}

function DifficultyIncrease() {
  if (rightQuestions >= 20) {
    rightQuestions = 0;
    questionAmount = 0;
    levelamount++;
    levels++;
    level.innerHTML = "Level: " + levelamount;
  }
  if (levels >= 5){
    levels = 1;
    difficulty += 4;
    minimumnumber += 2;
  }
}
