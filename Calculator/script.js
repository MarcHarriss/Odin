var storedNumA = '';
var storedNumB = '';
var storedOperator = '';
var nswer = '';

// storing the numbers entered into the display
var displayStoredNumA = document.getElementById('storedNumA');
var displayStoredOperator = document.getElementById('storedOperator');
var displayStoredNumB = document.getElementById('storedNumB');
var displayAnswer = document.getElementById('answer');

//create a functionf or updating the well
function updateStoredNumA(input) {
  displayStoredNumA.textContent += input;
  console.log('storedNumA = ' + displayStoredNumA.textContent);
}
function updateStoredOperator(input) {
  displayStoredOperator.textContent = input;
  console.log('storedoperator = ' + displayStoredOperator.textContent);
}
function updateStoredNumB(input) {
  displayStoredNumB.textContent += input;
  console.log('storedNumB = ' + displayStoredNumB.textContent);
}
function updateAnswer(input) {
  displayAnswer.textContent += input;
  console.log('Answer = ' + displayAnswer.textContent);
}

// function add(storedNumA, storedNumB) {
// return storedNumA + storedNumB;
// }
//
// function subtract(storedNumA, storedNumB) {
// return storedNumA - storedNumB;
// }
// function multiply(storedNumA, storedNumB) {
// return storedNumA * storedNumB;
// }
//
// function divide(storedNumA, storedNumB) {
// return storedNumA / storedNumB;
// }

function operate(numa, numb, op) {
var a = parseInt(numa);
var b = parseInt(numb);
  var result = '';
  if (op === '+') {
    result = a + b;
  } else if (op === '-') {
    result = a - b;
  } else if (op === '/') {
    result = a / b;
  } else {
    result = a * b;
  }
  updateAnswer(' = ' + result);
}


//listening for onlcick for the operators to enter them into the display also
//also for saving the first number into storedNumA it should also store the operator and clear both variables
var operators = Array.from(document.getElementsByClassName('operator'));
operators.forEach(function(operator) {
  operator.addEventListener('click', function(event) {
    if (storedNumA != '') {
    storedOperator = event.target.textContent;
    updateStoredOperator(event.target.textContent);
    // storedNumA += displayStoredNumA.textContent;
    // console.log(storedNumA);
    // updateStoredNumA(event.target.textContent);
  } else {
    console.log('please select a number first');
  }
  });
});
// this should be activated on the equals button to save the next input to storedNumB
// and chose a var depending on the storedOperator
var numbers = Array.from(document.getElementsByClassName('number'));
numbers.forEach(function(number) {
  number.addEventListener('click', function(event) {
    if (storedOperator != '') {
      storedNumB += event.target.textContent;
      updateStoredNumB(event.target.textContent);
    } else {
      storedNumA += event.target.textContent;
      updateStoredNumA(event.target.textContent);
    }
  });
});

// reset should clear the variable holding the data
function reset() {
  storedNumA = '';
  storedNumB = '';
  storedOperator = '';
  answer = '';
  displayStoredNumA.textContent = storedNumA;
  displayStoredNumB.textContent = storedNumB;
  displayStoredOperator.textContent = storedOperator;
  displayAnswer.textContent = answer;
}
