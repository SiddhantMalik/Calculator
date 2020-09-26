// Default value at the start
const defaultResult = 0;

// result at the start
let currentResult = defaultResult;

// commands executed in statement
let calculationDescription;

// list of logs
let logEntryList = [];

// converting input to  integer
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//To enter the Logs
function enterLogs() {
  logEntryList.push(calculationDescription);
  logEntryList.push(currentResult);
  console.log(logEntryList);
}

// to print the result and execute eneterlogs
function operations(operator) {
  outputResult(currentResult, calculationDescription);
  enterLogs();
}

// to validize the input
function getUserInput() {
  input = getUserNumberInput();
}

/* // // function for addition
// function add() {
//   getUserInput();
//   calculationDescription = `${currentResult} + ${input}`;
//   currentResult = currentResult + input;
//   operation("+");
// }

// //  Function for subtraction
// function subtract() {
//   getUserInput();
//   calculationDescription = `${currentResult} - ${input}`;
//   currentResult = currentResult - input;
//   operation("-");
// }

// //  Function for multiplication
// function multiply() {
//   getUserInput();
//   calculationDescription = `${currentResult} * ${input}`;
//   currentResult = currentResult * input;
//   operation("*");
// }

// //  Function for division
// function divide() {
//   getUserInput();
//   calculationDescription = `${currentResult} / ${input}`;
//   currentResult = currentResult + input;
//   operation("/");
// } */

function calculate(operation){
  getUserInput();
  if (operation === 'ADD'){
    calculationDescription = `${currentResult} + ${input}`;
  currentResult = currentResult + input;
  operations("+");
  }else if (operation === 'SUBTRACT'){
    calculationDescription = `${currentResult} - ${input}`;
    currentResult = currentResult - input;
    operations("-");
  }else if(operation === 'MULTIPLY'){
    calculationDescription = `${currentResult} * ${input}`;
    currentResult *= input;
    operations("*")
  }else if (operation === 'DIVIDE'){
    calculationDescription = `${currentResult} / ${input}`;
    currentResult = currentResult + input;
    operations("/");
  }
}

// button name.addEventListener("nature", function);
addBtn.addEventListener("click", calculate('ADD'));
subtractBtn.addEventListener("click", calculate('SUBTRACT'));
multiplyBtn.addEventListener("click",calculate('MULTIPLY'));
divideBtn.addEventListener("click", calculate('DIVIDE'));