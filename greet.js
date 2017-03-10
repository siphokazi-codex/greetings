
var greetBtn = document.querySelector('.myBtn');
var clearBtn = document.querySelector('.myClear');
var nameTxt = document.querySelector('.myText');
var helloList = document.querySelector('.myList');

var englishRadio= document.querySelector('.radioEng');
var frenchRadio = document.querySelector('.radioFre');
var tshivendaRadio = document.querySelector('.radioTshi');
var counterdisplay = document.querySelector('.display');
var resetBtn = document.querySelector('.myReset');

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

function greetPerson () {
  var nameCount = nameTxt.value;

//if (nameTxt.value.length > 0 ) {
    var hello = document.querySelector("input[name = 'languages']:checked");
    var greet = hello.value;
    nameTxt.value = '';
//  }
//  else {
//    helloList.innerHTML ="";
//  }
  //var counter = 0
  if (nameCount.length > 0) {
    helloList.innerHTML = greet + (nameCount.substr(0,1).toUpperCase() + nameCount.substr(1).toLowerCase());
  }
  var greeting = JSON.parse(localStorage.getItem('greeting'));
  if (greeting[nameCount] === undefined && nameCount.length > 0) {
  greeting[nameCount] = 1;
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

greetBtn.addEventListener('click', greetPerson);
clearBtn.addEventListener('click', clearField);
resetBtn.addEventListener('click', resetCounter);
