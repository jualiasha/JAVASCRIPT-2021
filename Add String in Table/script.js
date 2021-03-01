(function () {
  const executeScript = () => {
    var tr = document.createElement("tr");
    var table = document.querySelector("table");
    table.appendChild(
      tr
    ).innerHTML = `<td>test</td><td>test name</td><td>999</td><td>nonStaff</td>`;
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
    }
  }
  return this.studentNo + " " + this.name + " " + this.max;
};
console.log(getOldest());
/*let's make a table in html */
const WritetheTable = () => {
  for (var i = 0; i < getUsers().length; i++) {
    var tr = document.createElement("tr");
    var table = document.querySelector("table");
    if (addUser(i).studentNo > 0) {
      table.appendChild(tr).innerHTML = `<td>${addUser(i).studentNo}</td> <td>${
        addUser(i).name
      }</td> <td>${addUser(i).age}</td> <td>nonStaff</td>`;
    } else {
      table.appendChild(tr).innerHTML = `<td>${addUser(i).studentNo}</td> <td>${
        addUser(i).name
      }</td> <td>${addUser(i).age}</td> <td>Staff</td>`;
    }
  }
};
window.addEventListener("DOMContentLoaded", WritetheTable);

/*button-sorting*/

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
