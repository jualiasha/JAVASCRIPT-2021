const band = {
  members: {
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
  },
};

/**
 *temparray - temporary array where we make all changes and then push tis array to main band
 * sort info in this object according to the task
 * * make new object in the array band.members
 */
let temparray = band.members.past.concat(band.members.current);

console.log(temparray);
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const ageA = a.age;
  const ageB = b.age;

  /*     const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase(); */

  let comparison = 0;
  if (ageA > ageB) {
    comparison = -1;
  } else if (ageA < ageB) {
    comparison = 1;
  }
  return comparison;
}

temparray.sort(compare);

console.log(temparray);
function compareNames(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
temparray.sort(compare, compareNames);
console.log(temparray);

temparray.forEach((el) => {
  console.log(el.name.toLowerCase());
  return el.name.toLowerCase();
});

band.members.all = [];

band.members.all.push(temparray);

console.log(band.members.all);

const expected = {
  members: {
    // current: no changes
    current: [
      { name: "Sascha", age: 59, plays: ["vocals", "synth", "guitar", "bass"] },
      { name: "Lucia", age: 49, plays: ["vocals", "synth"] },
      { name: "Jules", age: 53, plays: ["guitar", "bass", "synth"] },
      { name: "Steve", age: 55, plays: ["guitar"] },
    ],
    // past: no changes
    past: [
      { name: "Raymond", age: 57, plays: ["vocals", "synth"] },
      { name: "En", age: 52, plays: ["vocals", "drums", "guitar", "synth"] },
      { name: "Gunter", age: 57, plays: ["guitar", "synth"] },
    ],
    // ORDER MATTERS!
    // 1. Sort age first by DESC
    // 2. then sort name by ASC
    // 3. lowercase all the names
    all: ["sascha", "gunter", "raymond", "steve", "jules", "en", "lucia"],
  },
  // plays order doesn't matter
  plays: {
    // name order doesn't matter
    // but show the name in lowercase
    vocals: ["sascha", "lucia", "raymond", "en"],
    synth: ["sascha", "lucia", "jules", "raymond", "en", "gunter"],
    guitar: ["sascha", "jules", "steve", "en", "gunter"],
    bass: ["sascha", "jules"],
    drums: ["en"],
  },
};
