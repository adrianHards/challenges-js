let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics)

let obj = { 1: 3, 2: 4 }
let map = new Map()
map.set(4, 5)

for (value in obj) {
  console.log(key)
  console.log(obj[key])
}
for (let value of Object.values(obj)) {
  console.log(value)
}

for (let key of map.keys()) {
  console.log(key);
}

// ✅ Iterate over a Map's values
for (let value of map.values()) {
  console.log(value);
}

// console.log(arr.map(num => num + 2))
// let arr = [1, 2, 3]
// console.log(arr.reduce((accumulator) => accumulator + num));

function total(array) {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(total([1, 2, 3]));


function stringConcat(array) {
  return array.reduce((previousValue, currentValue) => String(previousValue).concat(currentValue))
}

console.log(stringConcat([1, 2, 3])); // "123"


function totalVotes(arr) {
  return arr.reduce((previousValue, currentValue) => currentValue.voted === true ? ++previousValue : previousValue, 0)
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

console.log(totalVotes(voters)); // 7
console.log(voters.filter(person => person.voted).length)

function shoppingSpree(arr) {
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
  return arr.reverse().reduce((currentValue, previousValue) => previousValue.concat(currentValue))
}

// const flatten = arr => arr.reduce((a, v) => {
//   v instanceof Array ? a.push(...flatten(v)) : a.push(v);
//   return a;
// }, [])

var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

const voterResults = (voters) => {
  return voters.reduce((a, b) => {
    if (b.age >= 18 && b.age <= 25 && b.voted) {
      a.numYoungVotes++;
    }
    if (b.age >= 18 && b.age <= 25) {
      a.numYoungPeople++;
    }
    if (b.age >= 26 && b.age <= 35 && b.voted) {
      a.numMidVotesPeople++;
    }
    if (b.age >= 26 && b.age <= 35) {
      a.numMidsPeople++;
    }
    if (b.age >= 36 && b.age <= 55 && b.voted) {
      a.numOldVotesPeople++;
    }
    if (b.age >= 36 && b.age <= 55) {
      a.numOldsPeople++;
    }
    console.log(a)
    return { ...a };
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  });
};

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var oddEvenCounts = numbers.reduce(function (counts, number) {
  if (number % 2 === 1) {
    counts['odd']++;
  } else {
    counts['even']++;
  }
  // or simply: return counts
  return { ...counts }
}, { odd: 0, even: 0 });

console.log(oddEvenCounts);

// Well, odd isn't defined. What you should do is either put odd/even in quotes (counts['odd']) or use dot notation (counts.odd).

// Also, since odd and even aren't defined, incrementing them would result into NaN. The initial value should instead be { odd: 0, even: 0 }.

// https://gist.github.com/RakshithNM/7cbc8246c0c41b808bba1690c2a29517
// https://vmarchesin.medium.com/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
// https://bobbyhadz.com/blog/javascript-iterate-map#:~:text=Iterate%20through%20a%20Map%20using,Map%20object%20on%20each%20iteration.
