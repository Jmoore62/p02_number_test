/*Author: Jacob Moore*/
var answerOne = Math.floor(Math.PI) * Math.ceil(Math.E) * Math.sqrt(196) + Math.ceil(Math.E) * Math.floor(Math.E);
var answerTwo = Math.floor(Math.PI) * Math.ceil(Math.E) * Math.sqrt(196) + Math.ceil(Math.E) * Math.floor(Math.E);
var answerThree = Math.floor(Math.PI) * Math.ceil(Math.E) * Math.sqrt(196) + Math.ceil(Math.E) * Math.floor(Math.E);


var timeTaken = 0;
var previousTime = -1;
var isUpdate = false;

var timeTakenCookie = getCookie("timeTaken");
if (timeTakenCookie != ""){
  timeTaken = parseInt(timeTakenCookie);
}

var previousTimeCookie = getCookie("previousTime");
if (previousTimeCookie != ""){
  previousTime = parseInt(previousTimeCookie);
}

var isUpdateCookie = getCookie("isUpdate");
if (isUpdateCookie != ""){
  isUpdate = (isUpdateCookie == "true");
}


function checkInputOne() {
  var input = document.getElementById("input").value;
  var checkQuestion = document.getElementById("question").innerHTML;

  if (checkQuestion == 1){
    var answer = answerOne;
    var question = "questionOne";
  }else if (checkQuestion == 2){
    var answer = answerTwo;
    var question = "questionTwo";
  }else{
    var answer = answerThree;
    var question = "questionThree";
  }

  if (isNaN(input) || input.search(" ") != -1) {
    document.getElementById("inputGroup").classList.remove("has-success");
    document.getElementById("inputGroup").classList.add("has-error");
    document.getElementById("inputError").innerHTML= "Must be a number";
    document.getElementById("inputError").classList.remove("hidden-md");
  }else if (input == answer){
    document.getElementById("inputGroup").classList.remove("has-error");
    document.getElementById("inputGroup").classList.add("has-success");
    document.getElementById("inputError").innerHTML= "Correct";
    document.getElementById("inputError").classList.remove("hidden-md");
    setCookie(question,1,10);
  } else if (input == ""){
    document.getElementById("inputGroup").classList.remove("has-success");
    document.getElementById("inputGroup").classList.remove("has-error");
    document.getElementById("inputError").classList.add("hidden-md");
  }else{
    document.getElementById("inputGroup").classList.remove("has-success");
    document.getElementById("inputGroup").classList.add("has-error");
    document.getElementById("inputError").innerHTML= "Incorrect Answer";
    document.getElementById("inputError").classList.remove("hidden-md");
    setCookie(question,0,10);
  }

}

function setTextColor() {
  var cookieValues = getCookieValues();

  if (document.getElementById("questionOne") != null){
    if (cookieValues[0] != ""){
      if(cookieValues[0] == 0){
        document.getElementById("questionOne").classList.add("fontColorRed");
      }else{
        document.getElementById("questionOne").classList.add("fontColorGreen");
      }
    }else{
      document.getElementById("questionOne").classList.add("fontColorYellow");
    }
  }

  if (document.getElementById("questionTwo") != null){
    if (cookieValues[1] != ""){
      if(cookieValues[1] == 0){
        document.getElementById("questionTwo").classList.add("fontColorRed");
      }else{
        document.getElementById("questionTwo").classList.add("fontColorGreen");
      }
    }else{
      document.getElementById("questionTwo").classList.add("fontColorYellow");
    }
  }

  if (document.getElementById("questionThree") != null){
    if (cookieValues[2] != ""){
      if(cookieValues[2] == 0){
        document.getElementById("questionThree").classList.add("fontColorRed");
      }else{
        document.getElementById("questionThree").classList.add("fontColorGreen");
      }
    }else{
      document.getElementById("questionThree").classList.add("fontColorYellow");
    }
  }

}

function getCookieValues() {
  var questionOne = getCookie("questionOne");
  var questionTwo = getCookie("questionTwo");
  var questionThree = getCookie("questionThree");

  return [questionOne, questionTwo, questionThree];
}

//Borrowed cookie functions from W3Schools: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var user = getCookie(cname);
    if (user != "") {
        deleteCookie(cname);
    }
}

function deleteCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() - 1000);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + ";" + expires + ";path=/";
}

function getResults() {
  var cookieValues = getCookieValues();
  var numCorrect = 0;
  var numNotAnswered = 0;

  if (cookieValues[0] != ""){
    if(cookieValues[0] == 0){
      document.getElementById("questionOne").classList.add("fontColorRed");
      document.getElementById("questionOne").innerHTML = "Incorrect";
    }else{
      document.getElementById("questionOne").classList.add("fontColorGreen");
      document.getElementById("questionOne").innerHTML = "Correct";
      numCorrect++;
    }
  }else{
    document.getElementById("questionOne").classList.add("fontColorYellow");
    document.getElementById("questionOne").innerHTML = "Not Answered";
    numNotAnswered++;
  }

  if (cookieValues[1] != ""){
    if(cookieValues[1] == 0){
      document.getElementById("questionTwo").classList.add("fontColorRed");
      document.getElementById("questionTwo").innerHTML = "Incorrect";
    }else{
      document.getElementById("questionTwo").classList.add("fontColorGreen");
      document.getElementById("questionTwo").innerHTML = "Correct";
      numCorrect++;
    }
  }else{
    document.getElementById("questionTwo").classList.add("fontColorYellow");
    document.getElementById("questionTwo").innerHTML = "Not Answered";
    numNotAnswered++;
  }

  if (cookieValues[2] != ""){
    if(cookieValues[2] == 0){
      document.getElementById("questionThree").classList.add("fontColorRed");
      document.getElementById("questionThree").innerHTML = "Incorrect";
    }else{
      document.getElementById("questionThree").classList.add("fontColorGreen");
      document.getElementById("questionThree").innerHTML = "Correct";
      numCorrect++;
    }
  }else{
    document.getElementById("questionThree").classList.add("fontColorYellow");
    document.getElementById("questionThree").innerHTML = "Not Answered";
    numNotAnswered++;
  }
  var percentCorrect = numCorrect / 3 * 100;

  if (timeTaken - 360000 <= 0) {
    var score = 100;
    console.log(score);
  }else{
    var score = 100 - ((timeTaken - 360000) / 15000);
    console.log(score);
  }

  switch(numCorrect) {
    case 0:
      score = 0;
      break;
    case 1:
      score = score - 66.66;
      break;
    case 2:
      score = score - 33.33;
      break;
    default:
      break;
  }

  if (score < 0) {
    score = 0
  }
  if (numNotAnswered == 0) {
    document.getElementById("result").innerHTML = "You got " + percentCorrect.toFixed(2) + "% " + "correct!";
    document.getElementById("score").innerHTML = "You got a score of " + score.toFixed(0) + "%";
  }


}

function generateQuestionTwo() {


  var inputOne = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
  var inputTwo = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
  var inputThree = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
  var inputFour = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
  var inputFive = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
  var inputSix = [Math.floor((Math.random() * 9) + 1), Math.pow(2, Math.floor((Math.random() * 6) + 1)), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];

  var outputOne = inputOne[0] + "," + inputOne[1] + "," + inputOne[2] + ","  + inputOne[3] + " -&gt; ";
  var outputTwo = inputTwo[0] + "," + inputTwo[1] + "," + inputTwo[2] + ","  + inputTwo[3] + " -&gt; ";
  var outputThree = inputThree[0] + "," + inputThree[1] + "," + inputThree[2] + ","  + inputThree[3] + " -&gt; ";
  var outputFour = inputFour[0] + "," + inputFour[1] + "," + inputFour[2] + ","  + inputFour[3] + " -&gt; ";
  var outputFive = inputFive[0] + "," + inputFive[1] + "," + inputFive[2] + ","  + inputFive[3] + " -&gt; ";
  var outputSix = inputSix[0] + "," + inputSix[1] + "," + inputSix[2] + ","  + inputSix[3] + " -&gt; ";



  if (Number.isInteger(Math.sqrt(inputOne[0]))){
    outputOne = outputOne + Math.sqrt(inputOne[0]) + Math.log2(inputOne[1]) + (inputOne[2] % 3) + Math.ceil(inputOne[3] / 3);
  }else{
    outputOne = outputOne + Math.pow(inputOne[0], 2) + Math.log2(inputOne[1]) + (inputOne[2] % 3) + Math.ceil(inputOne[3] / 3);
  }

  if (Number.isInteger(Math.sqrt(inputTwo[0]))){
    outputTwo = outputTwo + Math.sqrt(inputTwo[0]) + Math.log2(inputTwo[1]) + (inputTwo[2] % 3) + Math.ceil(inputTwo[3] / 3);
  }else{
    outputTwo = outputTwo + Math.pow(inputTwo[0], 2) + Math.log2(inputTwo[1]) + (inputTwo[2] % 3) + Math.ceil(inputTwo[3] / 3);
  }

  if (Number.isInteger(Math.sqrt(inputThree[0]))){
    outputThree = outputThree + Math.sqrt(inputThree[0]) + Math.log2(inputThree[1]) + (inputThree[2] % 3) + Math.ceil(inputThree[3] / 3);
  }else{
    outputThree = outputThree + Math.pow(inputThree[0], 2) + Math.log2(inputThree[1]) + (inputThree[2] % 3) + Math.ceil(inputThree[3] / 3);
  }

  if (Number.isInteger(Math.sqrt(inputFour[0]))){
    outputFour = outputFour + Math.sqrt(inputFour[0]) + Math.log2(inputFour[1]) + (inputFour[2] % 3) + Math.ceil(inputFour[3] / 3);
  }else{
    outputFour = outputFour + Math.pow(inputFour[0], 2) + Math.log2(inputFour[1]) + (inputFour[2] % 3) + Math.ceil(inputFour[3] / 3);
  }

  if (Number.isInteger(Math.sqrt(inputFive[0]))){
    outputFive = outputFive + Math.sqrt(inputFive[0]) + Math.log2(inputFive[1]) + (inputFive[2] % 3) + Math.ceil(inputFive[3] / 3);
  }else{
    outputFive = outputFive + Math.pow(inputFive[0], 2) + Math.log2(inputFive[1]) + (inputFive[2] % 3) + Math.ceil(inputFive[3] / 3);
  }

  if (Number.isInteger(Math.sqrt(inputSix[0]))){
    answerTwo = "" + Math.sqrt(inputSix[0]) + Math.log2(inputSix[1]) + (inputSix[2] % 3) + Math.ceil(inputSix[3] / 3);
  }else{
    answerTwo = "" + Math.pow(inputSix[0], 2) + Math.log2(inputSix[1]) + (inputSix[2] % 3) + Math.ceil(inputSix[3] / 3);
  }

  document.getElementById("inputOne").innerHTML = outputOne;
  document.getElementById("inputTwo").innerHTML = outputTwo;
  document.getElementById("inputThree").innerHTML = outputThree;
  document.getElementById("inputFour").innerHTML = outputFour;
  document.getElementById("inputFive").innerHTML = outputFive;
  document.getElementById("inputSix").innerHTML = outputSix;

}

function generateQuestionOne() {
  var inputOne = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)];
  var inputTwo = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)];
  var inputThree = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)];
  var inputFour = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)];
  var inputFive = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)];
  var inputSix = [Math.floor((Math.random() * 20) + 3), Math.floor((Math.random() * 20) + 3)];

  var outputOne = inputOne[0] + "," + inputOne[1] + " -&gt; " + getCombination(inputOne[0], inputOne[1]);
  var outputTwo = inputTwo[0] + "," + inputTwo[1] + " -&gt; " + getCombination(inputTwo[0], inputTwo[1]);
  var outputThree = inputThree[0] + "," + inputThree[1] + " -&gt; " + getCombination(inputThree[0], inputThree[1]);
  var outputFour = inputFour[0] + "," + inputFour[1] + " -&gt; " + getCombination(inputFour[0], inputFour[1]);
  var outputFive = inputFive[0] + "," + inputFive[1] + " -&gt; " + getCombination(inputFive[0], inputFive[1]);
  var outputSix = inputSix[0] + "," + inputSix[1] + " -&gt; ";

  answerOne = getCombination(inputSix[0], inputSix[1]);

  document.getElementById("inputOne").innerHTML = outputOne;
  document.getElementById("inputTwo").innerHTML = outputTwo;
  document.getElementById("inputThree").innerHTML = outputThree;
  document.getElementById("inputFour").innerHTML = outputFour;
  document.getElementById("inputFive").innerHTML = outputFive;
  document.getElementById("inputSix").innerHTML = outputSix;

}

function generateQuestionThree() {

  var inputOne = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];
  var inputTwo = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];
  var inputThree = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];
  var inputFour = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];
  var inputFive = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];
  var inputSix = [Math.floor((Math.random() * 9) + 3), Math.floor((Math.random() * 9) + 3)];

  var outputOne = inputOne[0] + "," + inputOne[1] + " -&gt; " + (factorial(inputOne[0]) * factorial(inputOne[1]));
  var outputTwo = inputTwo[0] + "," + inputTwo[1] + " -&gt; " + (factorial(inputTwo[0]) * factorial(inputTwo[1]));
  var outputThree = inputThree[0] + "," + inputThree[1] + " -&gt; " + (factorial(inputThree[0]) * factorial(inputThree[1]));
  var outputFour = inputFour[0] + "," + inputFour[1] + " -&gt; " + (factorial(inputFour[0]) * factorial(inputFour[1]));
  var outputFive = inputFive[0] + "," + inputFive[1] + " -&gt; " + (factorial(inputFive[0]) * factorial(inputFive[1]));
  var outputSix = inputSix[0] + "," + inputSix[1] + " -&gt; ";

  answerThree = (factorial(inputSix[0]) * factorial(inputSix[1]));

  document.getElementById("inputOne").innerHTML = outputOne;
  document.getElementById("inputTwo").innerHTML = outputTwo;
  document.getElementById("inputThree").innerHTML = outputThree;
  document.getElementById("inputFour").innerHTML = outputFour;
  document.getElementById("inputFive").innerHTML = outputFive;
  document.getElementById("inputSix").innerHTML = outputSix;

}

function getCombination(bigOne, bigTwo) {
  var small = bigOne;
  var combinationOne = 0;
  var combinationTwo = 0;

  for (i = 0; i <= bigOne; i++) {
    combinationOne = combinationOne + combination(bigOne, small);
    small = small - 1;
  }

  small = bigTwo

  for (i = 0; i <= bigTwo; i++) {
    combinationTwo = combinationTwo + combination(bigTwo, small);
    small = small - 1;
  }

  return (combinationOne + combinationTwo);

}

function combination(large, small) {
  return factorial(large) / (factorial(small) * factorial((large - small)));
}

function factorial(number) {
  var tmp = number;
  var rValue = 1;
  for (i = 0; i < number; i++) {
    rValue *= tmp;
    tmp -= 1;
  }
  return rValue;

}

function setTime() {
  if (isUpdate){
    isUpdate = false;
    var time = new Date();
    timeTaken = timeTaken + (time.getTime() - previousTime);
    setCookie("isUpdate",isUpdate,10);
    setCookie("timeTaken",timeTaken,10);
  }

  console.log(timeTaken);




  if (document.getElementById("question") != null) {
    var checkQuestion = document.getElementById("question").innerHTML;
    if (checkQuestion == 1){
      var question = "questionOne";
    }else if (checkQuestion == 2){
      var question = "questionTwo";
    }else if (checkQuestion == 3){
      var question = "questionThree";
    }

    var cookie = getCookie(question);


    if (cookie != 1){
      isUpdate = true;
      previousTime = new Date();
      previousTime = previousTime.getTime();
      setCookie("isUpdate",isUpdate,10);
      setCookie("previousTime",previousTime,10);
    }
  }


}
