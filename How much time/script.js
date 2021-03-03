/**
 * @description Program counts how many calendar and business days days there is left until the entered date(from today(start date) until end date) and prints it with the event name on the screen
.
 * @param {array} arrayGap the array from today till the entered date.
 * @param {array} arrayHoliDays the array of finnish holidays .
 * @return {number} number of calendar days (Calresult), number of business days (CalBusiness) and number of Business days+holiday days (CalHolBusiness).
 */

let today = new Date();
let input, countdowntimer;
let enddate;
let arrayGap = [];
let arrayDays = [];
let Calresult;
let CalBusiness;
let checkhol = [];
let holdays = [];
let gapdays = [];
let CalHolBusiness;
let arrayHoliDays = [
  new Date("01-01-2021"),
  new Date("01-06-2021"),
  new Date("04-02-2021"),
  new Date("04-04-2021"),
  new Date("04-05-2021"),
  new Date("05-01-2021"),
  new Date("05-13-2021"),
  new Date("05-23-2021"),
  new Date("06-25-2021"),
  new Date("11-06-2021"),
  new Date("12-06-2021"),
  new Date("12-24-2021"),
  new Date("12-25-2021"),
  new Date("12-26-2021"),
];
document.getElementById("enddate").addEventListener("change", function () {
  input = this.value;
  enddate = new Date(input);
  console.log(input);
  console.log(enddate);
});
let userevent = document.getElementById("userevent");

let result = document.querySelector("#result");
let form = document.getElementById("form");

/*stop refresh on submit*/

const Stoprefresh = (event) => {
  event.preventDefault();
};

/*I am counting normal Days*/
const CalculateDays = () => {
  var today = new Date();
  Calresult = Math.floor(
    (enddate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  /*I am counting Business Days*/

  for (i = 0; i < Calresult; i++) {
    arrayGap.push(new Date(today.setDate(today.getDate() + 1)));
  }

  arrayDays = arrayGap.map((el) => {
    return el.getDay();
  });

  CalBusiness = arrayDays.filter((el) => {
    return el > 0 && el < 6;
  }).length;

  /*I am counting business Days+holidays*/
  holdays = arrayHoliDays.map((el) => {
    return el.getDate() + "/" + el.getMonth();
  });

  gapdays = arrayGap.filter((el) => {
    if (el.getDay() > 0 && el.getDay() < 6) {
      return el;
    }
  });
  gapdays = arrayGap.map((el) => {
    return el.getDate() + "/" + el.getMonth();
  });

  checkhol = gapdays.filter((ai) => holdays.includes(ai));

  console.log(checkhol);

  if (checkhol.length > 0) {
    CalHolBusiness = CalBusiness - checkhol.length;
  } else {
    CalHolBusiness = CalBusiness;
  }

  result.innerHTML = `<h3>You need to wait for ${userevent.value}: </h3>  Calendar days: ${Calresult} <br>  Week-ends free days: ${CalBusiness} <br> Finnish Business Days: ${CalHolBusiness} <br> <h3>Be patient! Good luck!</h3>  `;
  form.reset();
  arrayGap = [];
  TimerFunction();
};

/*Countdown*/
const TimerFunction = () => {
  if (countdowntimer) {
    clearInterval(countdowntimer);
  }

  var countDownDate2 = enddate.getTime();
  countdowntimer = setInterval(function () {
    var now2 = new Date().getTime();

    var distance2 = countDownDate2 - now2;

    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 =
      Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 2;
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    document.querySelector(".timer").style.display = "block";
    document.getElementById("demo2").innerHTML =
      days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
  }, 1000);
};

form.addEventListener("submit", Stoprefresh, CalculateDays);

/**
 * @description Program counts how many calendar and business days there is left between the entered start date and entered end date and prints it with the event name on the screen
.
 * @param {array} arrayGap2 the array from the start date till the entered end date.
 * @param {array} arrayHoliDays the array of finnish holidays .
 * @return {number} number of calendar days (Calresult2),  and number of Business days+holiday days (CalHolBusiness2).
 */
let input2, Calresult2, input3, CalHolBusiness2;
let arrayGap2 = [];
let gapdays2 = [];
let gapdays3 = [];
let checkhol2 = [];
let form2 = document.getElementById("form2");
let startdate = document.getElementById("startdate");
let enddate2;
let userevent2 = document.getElementById("userevent2");
let result2 = document.querySelector("#result2");
document.getElementById("enddate2").addEventListener("change", function () {
  input2 = this.value;
  enddate2 = new Date(input2);
});

document.getElementById("startdate").addEventListener("change", function () {
  input3 = this.value;
  startdate = new Date(input3);
});

const CalculateDays2 = () => {
  Calresult2 =
    Math.floor(
      (enddate2.getTime() - startdate.getTime()) / (1000 * 60 * 60 * 24)
    ) - 1;

  /*I am counting Business Days*/

  for (i = 0; i < Calresult2; i++) {
    arrayGap2.push(new Date(startdate.setDate(startdate.getDate() + 1)));
  }

  /*I am counting business Days+holidays*/
  holdays = arrayHoliDays.map((el) => {
    return el.getDate() + "/" + el.getMonth();
  });

  gapdays2 = arrayGap2.filter((el) => {
    if (el.getDay() > 0 && el.getDay() < 6) {
      return el;
    }
  });
  gapdays3 = arrayGap2.map((el) => {
    return el.getDate() + "/" + el.getMonth();
  });

  checkhol2 = gapdays3.filter((ai) => holdays.includes(ai));

  console.log(checkhol2);

  if (checkhol2.length > 0) {
    CalHolBusiness2 = gapdays2.length - checkhol2.length;
  } else {
    CalHolBusiness2 = gapdays2.length;
  }

  result2.innerHTML = `<h3>You need to wait for ${userevent2.value}: </h3>  Calendar days: ${Calresult2} <br> Finnish Business Days: ${CalHolBusiness2} <br> <h3>Be patient! Good luck!</h3>  `;
};
form2.addEventListener("submit", Stoprefresh, CalculateDays2);
