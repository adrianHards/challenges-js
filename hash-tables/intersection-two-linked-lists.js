function getIntersectionNode(headA, headB) {
  // convert each array into an object (below is ES8; use Object.assign if not supported)
  const objA = { ...headA }
  const objB = { ...headB }

  // loop over each key-value pair in first object
  for (const key in objA) {
    // if the value exists in the other object
    if (Object.values(objB).includes(objA[key])) {
      // return the value
      return objA[key]
    }
  }
  // loop ended, meaning there is no link value so return null
  return null
};

// headA = [4, 1, 8, 4, 5]
// headB = [5, 6, 1, 8, 4, 5]

// console.log(getIntersectionNode(headA, headB))
