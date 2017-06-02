//Declaring buttons fron index.html file
var greetBtn = document.querySelector('.buttonGreet');
var clearBtn = document.querySelector('.buttonClear');
var resetBtn = document.querySelector('.resetButton');

//Declaration of elements within the index.html file
var nameTxt = document.querySelector('.textboxName');
var helloList = document.querySelector('.nameList');
var counterdisplay = document.querySelector('.displayCntr');

//Declaration of radio buttons within the index.html file
var englishRadio= document.querySelector('.radioEnglish');
var frenchRadio = document.querySelector('.radioFrench');
var tshivendaRadio = document.querySelector('.radioTshivenda');

//Obtaining value from name text value
var nameValue = nameTxt.value;

//This function gets value from the name textbox.
function getName(){

  if(nameValue < 0){
    helloList.innerHTML = "Please input name to be greeted on above textbox";
  }
  else {
    return nameValue;
  }
}

//This function stores the counter variable on the local Storage and display it on the web page
function storeValues() {


  if (localStorage.counter === undefined) {
      localStorage.setItem('counter', 0);
  }
  if (localStorage.getItem('greeting') === undefined) {
      localStorage.setItem('greeting', JSON.stringify({}));
  }
  else {
    greeting = JSON.parse(localStorage.getItem('greeting'));
  }
    counterdisplay.innerHTML = localStorage.counter;
}

/*This function takes the radio button selected and take the
radio button language, depending on radio button selected.*/
function getLanguage() {

    if (document.getElementById("English").checked === true) {
      return "English"
    }
    else if (document.getElementById("French").checked === true) {
      return "French"
    }
    else if (document.getElementById("Tshivenda").checked === true) {
      return "Tshivenda"
    }
}

/*This function takes the getName and getLanguage function pass these two functions
 as parameters and pass the values to the greet button event listener*/
 var greet =  function(nameValue){
   var myGreeting = getMessage(getName(), getLanguage());
    helloList.innerHTML = myGreeting;
 }

//This function uniquely calculates how many times a unique name has been greeted
function calculateCounter() {

  //var greeting = JSON.parse(localStorage.getItem('greeting'));
  if (nameValue === undefined && nameValue.length > 0) {
    nameValue = 1;
    counter ++;
    //localStorage.counter ++;
    counterdisplay.innerHTML = counter;
    //localStorage.setItem('greeting', JSON.stringify(greeting));
  }
};

function clearField () {
    helloList.innerHTML = '';
}

function resetCounter () {
    localStorage.counter = 0;
    counterdisplay.innerHTML = localStorage.counter;
}

greetBtn.addEventListener('click', greet);
clearBtn.addEventListener('click', clearField);
resetBtn.addEventListener('click', resetCounter);
