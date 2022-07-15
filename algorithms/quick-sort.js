function quickSort(items) {
  // save the length of the items array
  const length = items.length

  // if the length is less than or equal to 1 simply return the array, no sorting needed
  if (length <= 1) {
    return items
  }

  // PIVOT will be our central point around which the other numbers will be sorted; lets take the first element of the array
  const PIVOT = items[0]
  // create an empty array for numbers greater than the pivot number
  const GREATER = []
  // and one for numbers less than
  const LESSER = []

  // iterate over items array
  for (let i = 1; i < length; i++) {
    // if current number at index i is greater than the PIVOT number add to GREATER array
    if (items[i] > PIVOT) {
      GREATER.push(items[i])
      // else add to LESSER array
    } else {
      LESSER.push(items[i])
    }
  }

  // combine the arrays with the spread operator (https://dev.to/sagar/three-dots---in-javascript-26ci)
  const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
  return sorted
}

// export { quickSort }

// console.log(quickSort([5, 2, 4, 7]))
