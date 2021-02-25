let counter = 0;
let randomNumber = 0;
while (counter < 100) {
  console.log("hello from while");
  counter++;
}
/* const timer = setInterval(() => {
  console.log("hiiiiii");
  randomNumber++;
}, 500); */

//1. creation of dom content
document.write("<br>bye ye");
document.write("<h1>Well hello</h1>");
const newEl = document.createElement("h2"); //we create a new elenemt of the page
newEl.innerText = "Hello from H2";

newEl.id = "message";
newEl.className = "class1 class2";
newEl.classList.add("active", "hidden", "class1");
document.body.appendChild(newEl); //we put this el to the doc
