// link to problem: https://leetcode.com/problems/roman-to-integer/

function romanToInt(str) {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let int = 0;
  for (i = 0; i < str.length; i++) {
    let currentInt = romanHash[str[i]]
    let nextInt = romanHash[str[i + 1]]
    if (currentInt < nextInt) {
      int -= currentInt
    } else {
      int += currentInt
    }
  }
  return int
};

// ------------------------------------------

// with notes
function romanToInt(str) {
  // create a hash table which we'll use to convert roman numerals into integers
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  // initialize our answer/accumulator
  let int = 0;

  // iterate over the string
  for (i = 0; i < str.length; i++) {
    // access romanHash with numeral at index and assign integer to currentInt
    let currentInt = romanHash[str[i]]
    // access romanHash with numeral at index + 1 and assign integer to nextInt
    let nextInt = romanHash[str[i + 1]]
    // if value of currentInt is less than that of nextInt
    if (currentInt < nextInt) {
      // take away value of currentInt from our accumulator (e.g. IV = 4 because: 0 - 1 = -1 and -1 + 5 = 4)
      int -= currentInt
    } else {
      // else add value of currentInt to our accumulator
      int += currentInt
    }
  }
  // return our answer outside of the loop
  return int
};
