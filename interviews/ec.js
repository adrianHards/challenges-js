///// -- ARRAYS -- /////

///// -- SUM -- /////
function sum(numbers) {
  return numbers.reduce((a, b) => (a + b), 0)
}

const testNumbers = [1, 6, 9, -8, 2]
console.log(sum(testNumbers))

/// MAX ///
function max(numbers) {
  return numbers.reduce((a, b) => (b > a) ? b : a, numbers[0])
}

const testNumbers2 = [-1, -2]
console.log(max(testNumbers))
console.log(max(testNumbers2))

// /// FILTER ///

function filter(numbers, predicate) {
  let answerArr = []
  for (let num of numbers) {
    if (predicate(num)) {
      answerArr.push(num)
    }
  }
  return answerArr
}

console.log(filter(testNumbers, x => x > 5))
// filter(testNumbers, x => isEven(x))

///// -- OBJECTS -- /////

const testPeople = [
  {
    area: 'london',
    name: 'eoin'
  },
  {
    area: 'bath',
    name: 'juliette'
  },
  {
    area: 'london',
    name: 'alle'
  }
]

function binByArea(people) {
  let map = new Map()
  people.forEach((person) => {
    if (!map.has(person.area)) {
      map.set(person.area, [person])
    } else {
      map.set(person.area, map.get(person.area).concat(person))
    }
  })
  return map
}

console.log(binByArea(testPeople))

// // returns:
// {
//   london: [
//     {
//       name: 'eoin',
//       area: 'london'
//     },
//     {
//       name: 'alle,
//       area: 'london'
//     }
//   ],
//     bath: [
//       {
//         name: 'juliette',
//         area: 'bath'
//       }
//     ]
// }

// // binBy pt2
// function binBy(key, people) {
//   // your code here
// }

// // example
// binBy('area', testPeople) should have the same output as above

// ///// -- STRINGS -- /////

// /// AFTER WORD ///
function afterWord(searchWord, str) {
  const splitArr = str.split(' ')
  const index = splitArr.indexOf(searchWord)
  const answerStr = splitArr.slice(index).join(' ')
  return answerStr
}

console.log(afterWord('sat', 'the cat sat on the mat'))
// // returns: 'sat on the mat'

// afterWord('an', 'we did an interview')
// // returns: 'an interview'

// /// PARSE QUERY STRING ///
function parseQueryString(url) {
  const rightSplit = url.split('?')[1]
  console.log(rightSplit)

  const targetParts = rightSplit.split('&')
  console.log(targetParts)

  const keyValuePairs = targetParts.map(part => part.split('='))
  console.log(keyValuePairs)

  return new Map(keyValuePairs)
}

console.log(parseQueryString('api.edyn.care/carers?location=london&gender=m&name=eoin'))
// returns: {location: 'london', gender: 'm', name: 'eoin}

// // pt 2

function secondParseQueryString(url) {

  map = new Map()
  const rightSplit = url.split('?')[1]
  console.log(rightSplit)

  const targetParts = rightSplit.split('&')
  console.log(targetParts)

  const keyValuePairs = targetParts.map(part => part.split('='))
  console.log(keyValuePairs)

  for (let part of keyValuePairs) {
    if (!map.has(part[0])) {
      map.set(part[0], part[1])
    } else {
      map.set(part[0], [map.get(part[0])].concat(part[1]))
    }
  }
  return map
}

console.log(secondParseQueryString('api.edyn.care/carers?location=london&gender=m&location=brighton'))
// returns: {location: ['london', 'brighton'], gender: 'm'}

// ///// -- ASYNC & CALLBACKS -- /////

// // PARALLEL
// // starts with example

// function waitThenValue(timeout, value) {
//   return function (callback) {
//     setTimeout(() => {
//       callback(null, value)
//     }, timeout)
//   }
// }

// function waitThenFail(timeout, errorMessage) {
//   return function (callback) {
//     setTimeout(() => {
//       callback(new Error(errorMessage))
//     }, timeout)
//   }
// }

// parallel([
//   waitThenValue(10, 'hello')
//   waitThenValue(20, ', world')
// ], function (err, result) {
//   // err = null
//   // result = ['hello', ', world']
// })

// parallel([
//   waitThenValue(10, 'hello')
//   waitThenFail(20, 'ops')
// ], function (err, result) {
//   // err = Error('ops')
//   // result = undefined
// })


// function parallel(asynTasks, callback) {
//   // your code here
// }
