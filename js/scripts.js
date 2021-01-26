//Business Logic:

const add(number1, number2) {
  return number1 + number2;
};

const subtract(number1, number2) {
  return number1 - number2;
};

const multiply(number1, number2) {
  return number1 * number2;
};

const divide(number1, number2) {
  return number1 / number2;
};

// User Interface Logic

$(document).ready(function() {
  const number1= parseInt(prompt("Enter a number:"));
  const number2= parseInt(prompt("Enter another number:"));

  alert(add(number1, number2));
});



