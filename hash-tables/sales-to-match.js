pile = [1, 2, 1, 1, 2, 3]

const sockCount = (pile) => {
  // create an emmpty object
  let total = {}
  // iterate over value in the pile array
  for (sock of pile) {
    // key in total object is sock and the value is current value or 0 if there isn't one, plus 1
    total[sock] = (total[sock] || 0) + 1
  }
  // Object.values makes an array of the object, reduce adds to the accumulator value the result of the total number of a coloured sock divided (and rounded down) by 2
  return Object.values(total).reduce((acc, cur) => acc + (Math.floor(cur / 2)), 0);
}

console.log(sockCount(pile))


// bonus: elegant Ruby solution

// def sockMerchant(arr)
//   // save unique sock colours
//   unique = arr.uniq
//   // create answer sum
//   sum = 0
//   // iterate over each colour sock in unique and add to sum the result of the total number of a coloured sock divided (and rounded down) by 2
//   unique.each { | el | sum += arr.count(el) / 2 }
//   // return the sum
//   sum
// end

// p sockMerchant(pile)
