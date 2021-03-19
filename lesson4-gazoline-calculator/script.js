function calculate() {
  let price = Number(
    document.querySelector("#price").value
  ); /*query selector and getelement by id is the same*/
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");
  console.log(price);
  console.log(money);
  console.log(price * money);

  answer.textContent = money / price;
  /*   answer.innerHTML = money / price;
  answer.innerText = money / price; - don't use it can hack your page*/
}

calculate2 = () => {
  let price = Number(
    document.querySelector("#price").value
  ); /*query selector and getelement by id is the same*/
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");
  let message;
  let litters = money / price;
  let solution = document.querySelector("#solution");
  console.log(price);
  console.log(money);
  console.log(price * money);

  answer.textContent = money / price;
  if (litters > 10) {
    message = "yes you can escape";
  } else {
    message = "ups, stay here";
  }
  solution.textContent = message;
  /*   answer.innerHTML = money / price;
  answer.innerText = money / price; - don't use it can hack your page*/
};

/* function calculate() {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");
  console.log(price);
  console.log(money);
  console.log(price * money);

  answer.textContent = money / price;
} */

/* function hello() {
  alert("Hello, My name is Julia ");
  whoareyou();
}

function whoareyou() {
  let yourname = prompt("what is your name?");
  greeting(yourname);
}
function greeting(name) {
  document.write(name);
}
hello();
 */
/* function calculate() {
  return console.log("wow, you pressed the button");
} */
