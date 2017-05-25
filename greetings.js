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

//This function stores the counter variable on the local Storage and display it on the web page
function storeValues() {
  //Calling the calculate counter function
  calculateCounter();

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

/*This function takes an input name and greets a person with a different language, depending on radio button selected.
  Display the input name and language greeted on the web page*/
function getRadioButtonValue() {
    //Calling the input name function
    //getInputName();

    //Get the radio button value
    var hello = document.querySelector("input[name = 'languages']:checked");
    var greetValue = hello.value;
    nameTxt.value = '';
}

function getInputName() {
  //Calling the radio button function
  getRadioButtonValue();

  if (nameValue.length > 0) {
    //takes the radio button value and concatenates it with the input text box value.
    helloList.innerHTML = greetValue + (nameValue.substr(0,1).toUpperCase() + nameValue.substr(1).toLowerCase());
  }
};

//This function calculates how many times a unique name has been greeted
function calculateCounter() {
  //Calling the input name function
  getInputName();

  var greeting = JSON.parse(localStorage.getItem('greeting'));
  if (greeting[nameValue] === undefined && nameValue.length > 0) {
    greeting[nameValue] = 1;
    localStorage.counter ++;
    counterdisplay.innerHTML = localStorage.counter;
    localStorage.setItem('greeting', JSON.stringify(greeting));
  }
};

function clearField () {
    helloList.innerHTML = '';
}

function resetCounter () {
    localStorage.counter = 0;
    counterdisplay.innerHTML = localStorage.counter;
}

greetBtn.addEventListener('click', getInputName);
clearBtn.addEventListener('click', clearField);
resetBtn.addEventListener('click', resetCounter);
