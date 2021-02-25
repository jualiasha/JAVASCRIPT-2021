let number = document.querySelectorAll("numbers");

let operator = document.getElementsByClassName("operators");
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let x = document.getElementsByClassName("x");
let devide = document.getElementsByClassName("devide");
let dot = document.getElementsByClassName("dot");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let chosennumber1;
let chosennumber2;

const AddFunction = (a, b) => {
  result = a + b;
};
const MinusFunction = (a, b) => {
  result = a - b;
};

const MultiplyFunction = (a, b) => {
  result = a * b;
};

const DevideFunction = (a, b) => {
  result = a / b;
};

let AllNumbers = [];

function myFunction() {
  let calnumbers = document.getElementsByClassName("numbers").children;

  var i;
  for (i = 0; i < calnumbers.length; i++) {
    AllNumbers.push(calnumbers);
  }
}
myFunction();

var numberStart = 0;
var numberEnd = 9;

var arrNumbers = [];

while (numberStart < numberEnd + 1) {
  arrNumbers.push(numberStart++);
}
