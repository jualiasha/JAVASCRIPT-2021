let header = document.querySelector("header");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

/* function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.backgroundColor = "red";
    header.style.color = "#000";
  } else {
    header.style.backgroundColor = "lightgrey";
  }
} */
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}

let mybutton = document.querySelector("#backtotop");

window.onscroll = function () {
  toTopFunction();
};

function toTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let mobilebutton = document.getElementById("mobilebutton");
let nav = document.querySelector("nav");

const mobMenu = () => {
  nav.classList.toggle("responsive");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
};

mobilebutton.addEventListener("click", mobMenu);
