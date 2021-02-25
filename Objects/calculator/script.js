function Car(plate, producer, model, price, color) {
  this.plate = plate;
  this.producer = producer;
  this.model = model;
  this.price = price;
  this.color = color;
}
let cararray = [];
const car = (event) => {
  event.preventDefault();
  let u_plate = document.querySelector("#plate");
  let u_producer = document.querySelector("#producer");
  let u_model = document.querySelector("#model");
  let u_price = document.querySelector("#price");
  let u_color = document.querySelector("#color");

  let userInput = new Car(
    u_plate.value,
    u_producer.value,
    u_model.value,
    u_price.value,
    u_color.value
  );

  cararray.push(userInput);
  console.table(cararray);

  let txt = document.querySelector("#txt");
};

searchtheplate = () => {
  let search = document.querySelector("#search");
  let text = document.querySelector("#text");

  let i;
  for (i in cararray) {
    console.log(cararray[i].plate);
    if (search.value === cararray[i].plate) {
      text.textContent = `This car mark is ${cararray[i].producer} and model is ${cararray[i].model}`;
      break;
    } else {
      text.textContent = `Not found`;
    }
  }
};

/*     Car.discount = function () {
      if (cararray[i].price > 20000) {
        this.result = cararray[i].price - cararray[i].price * 0.25;
      } else if (cararray[i].price < 5000) {
        this.result = cararray[i].price - cararray[i].price * 0.05;
      } else {
        this.result = cararray[i].price - cararray[i].price * 0.15;
      }
      return this.result;
    };
  }

  txt.textContent = `Your dicounted price for this car is ${Car.discount()}`;
}; */
