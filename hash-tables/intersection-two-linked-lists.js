// the two lists will intersect at null regardless (see diagram of a linked list)
// which means they will intersect at an earlier node if they are linked
// we could start by finding the difference in length of the two lists, and then add pointers to the same nodes
// instead, we don't need to find exact length of each list, we can have the pointers start at at the head of each list
// and when they reach null, switch to the head of the other list
// the two pointers will then go through the two lists in opposite order resulting in them reaching null together
// see https://www.youtube.com/watch?v=D0X0BONOQhI to understand
// of course we can use this to find node at which they intersect before null, assuming there is one

function getIntersectionNode(headA, headB) {
  // pointers start at the heads of their respective lists
  let pointerA = headA;
  let pointerB = headB;

  // loop while the pointers are not equal to one another (either intersecting node or nill)
  while (pointerA !== pointerB) {
    // if condition true, go to next node, if null, go to head of list B
    pointerA = pointerA ? pointerA.next : headB;
    // opposite of above
    pointerB = pointerB ? pointerB.next : headA;
    console.log('pointerA', pointerA, 'pointerB', pointerB)
  }

  // return current value of pointerA (which will be first time lists intersect or null)
  return pointerA;

};

// ---------------------

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
