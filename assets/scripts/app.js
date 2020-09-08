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
function operation(operator) {
  calculationDescription = `${currentResult} ${operator} ${input}`;
  outputResult(currentResult, calculationDescription);
  enterLogs();
}

// to validize the input
function getUserInput() {
  input = getUserNumberInput();
}

// function for addition
function add() {
  getUserInput();
  currentResult = currentResult + input;
  operation("+");
}

//  Function for subtraction
function subtract() {
  getUserInput();
  currentResult = currentResult - input;
  operation("+");
}

//  Function for multiplication
function multiply() {
  getUserInput();
  currentResult = currentResult * input;
  operation("+");
}

//  Function for division
function divide() {
  getUserInput();
  currentResult = currentResult + input;
  operation("+");
}

// button name.addEventListener("nature", function);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
