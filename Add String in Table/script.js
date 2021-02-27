(function () {
  const executeScript = () => {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var table = document.querySelector("table");
    table.appendChild(
      tr
    ).innerHTML = `<td>test</td><td>test name</td><td>test 999</td>`;
  };
  window.addEventListener("DOMContentLoaded", executeScript);
})();

/*without DOMContentLoaded function doesn't work because to execute the script it should extract parameters that are not loaded on the page and script starts execution before page load. When we add this event listener script runs the function executeScript after DOM element(table) is loaded on the page. */

const getUsers = () => [
  {
    studentNo: 123,
    name: "harry",
    age: 15,
  },
  {
    studentNo: 234,
    name: "Ron",
    age: 16,
  },
  {
    studentNo: 135,
    name: "Hermione",
    age: 17,
  },
  {
    studentNo: -1,
    name: "Snape",
    age: 55,
  },
  {
    studentNo: -1,
    name: "Hagrid",
    age: 65,
  },
];

/* const addUser = (single) => {
  function SingleStu(studentNo, name, age) {
    this.studentNo = getUsers().forEach((el) => {
      return el.studentNo;
    });
    this.name = getUsers().forEach((el) => {
      return el.name;
    });
    this.age = getUsers().forEach((el) => {
      return el.age;
    });
  }
  single = new SingleStu();

  // return getUsers()[1].studentNo;
}; */
var i;
const addUser = (i) => getUsers()[i];
for (i = 0; i < getUsers().length; i++) {
  addUser(i);

  console.log(addUser(i));
}
const getOldest = () => {
  var i = 0;
  this.max = -Infinity;
  for (i = 0; i < getUsers().length; i++) {
    if (addUser(i).age > this.max) {
      this.max = addUser(i).age;
      this.studentNo = addUser(i).studentNo;
      this.name = addUser(i).name;
      /*  return addUser(i).studentNo + addUser(i).name + addUser(i).age; */
    }
  }
  return this.studentNo + " " + this.name + " " + this.max;
};
console.log(getOldest());
