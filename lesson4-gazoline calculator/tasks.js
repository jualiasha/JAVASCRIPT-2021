agecalculator = () => {
  let age = Number(document.querySelector("#age").value);
  let agemessage = document.querySelector("#agemessage");
  let text;
  if (age < 18) {
    text = "too young";
  } else if (age < 27) {
    text = "right age for military service";
  } else if (age < 41) {
    text = "You are in Reerve";
  } else if (age < 55) {
    text = "You are in backup Reserve";
  } else {
    text = "too aged";
  }
  agemessage.textContent = text;
};

threenumbers = () => {
  let number1 = Number(document.querySelector("#number1").value);
  let number2 = Number(document.querySelector("#number2").value);
  let number3 = Number(document.querySelector("#number3").value);
  let text1;
  let calculation2 = document.querySelector("#calculation2");

  if (number1 > 0 && number2 > 0 && number3 > 0) {
    text1 = number1 + number2 + number3;
  } else if (number1 > 0 || number2 > 0 || number3 > 0) {
    text1 = `"sum is" ${number1 + number2 + number3} "and multiplication is" ${
      number1 * number2 * number3
    }`;
  } else if (number1 < 0 && number2 < 0 && number3 < 0) {
    text1 = "only negatives";
  } else {
    text1 = 0;
  }
  calculation2.textContent = text1;
};

onenumber = () => {
  let t3_number1 = Number(document.querySelector("#t3_number1").value);
  let t3_onenumber = document.querySelector("#onenumber");
  let text;
  t3_number1 > 0 && t3_number1 % 2 === 0
    ? (text = "that is even number")
    : (text = "that number is odd");
  t3_onenumber.textContent = text;
};

bmi = () => {
  let height = Number(document.querySelector("#height").value);
  let weight = Number(document.querySelector("#weight").value);
  let result = (weight / height ** 2) * 10000;
  let bmi = document.querySelector("#bmi");
  let text;
  console.log(result);
  result < 18.5
    ? (text = "Underweight")
    : result >= 18.5 && result <= 24.9
    ? (text = "Normal or Healthy Weight")
    : result > 24.9 && result < 30
    ? (text = "Overweight")
    : result >= 30
    ? (text = "Obese")
    : (text = "");
  bmi.textContent = text;
};

d_salary = () => {
  let h_salary = Number(document.querySelector("#h_salary").value);
  let hours = Number(document.querySelector("#hours").value);
  let d_salary = document.querySelector("#d_salary");
  let result;
  hours <= 7
    ? (result = h_salary * hours)
    : hours > 7 && hours <= 9
    ? (result = hours * h_salary + ((7 - hours) * h_salary) / 2)
    : hours > 9
    ? (result = hours * h_salary + (2 * h_salary) / 2 + (hours - 9) * h_salary)
    : (result = "WOOOOOO");
  d_salary.textContent = result;
};
