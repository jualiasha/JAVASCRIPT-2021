let car = {
  type: "Audi",
  year: 2000,
  ownerName: "Matv",
  city: "Helsinki",
  /*fumction inisde the object is method*/
  calcAge: function () {
    this.age = 2021 - this.year;
    return this.age;
  },
  calcAge1: () => 2021 - car.year /*better not to use this method*/,
};

console.log(car);
console.log(car.year);
console.log(car.city);

car.color = "Red";
console.log(car);
car.color = "Black";
console.log(car);
delete car.city;
console.log(car);
let text = document.querySelector("#car");
text.textContent = `Your car was produced in ${
  car.year
} and its age is ${car.calcAge1()} and ${car.calcAge()} years old`;

//let's make constructor for our Object

function Car(type, year, ownerName, city) {
  this.type = type;
  this.year = year;
  this.ownerName = ownerName;
  this.city = city;
}

let Mycar = new Car("Merc", 2021, "MyCar", "Helsinki");
console.log(Mycar);

let vw = new Car("VW", 2021, "MArgit", "Helsinki");
console.log(vw);
