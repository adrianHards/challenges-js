// correct solution, notes to follow
function getIntersectionNode(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
    console.log('pointerA', pointerA, 'pointerB', pointerB)
  }

  return pointerA;

};

// invalid solution as a result of misunderstanding the problem

function getIntersectionNode(headA, headB) {
  // convert each array into an object (below is ES8; use Object.assign if not supported)
  const objA = { ...headA }
  const objB = { ...headB }
  let arrA = new Array()
  let arrB = new Array()

  // loop over each key-value pair in objA
  for (const key in objA) {
    // if the value exists in the other object
    if (Object.values(objB).includes(objA[key])) {
      // save the shared value in an array
      arrA.push(objA[key])
    }
  }

  // do the same for objB
  for (const key in objB) {
    if (Object.values(objA).includes(objB[key])) {
      arrB.push(objB[key])
    }
  }

  // loop either array and return the first value that matches at index i
  for (const i in arrA) {
    if (arrA[i] === arrB[i]) {
      return arrA[i]
    }
  }

  // if there is no link value return null
  return null
};
