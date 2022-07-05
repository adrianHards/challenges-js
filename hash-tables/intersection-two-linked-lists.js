function getIntersectionNode(headA, headB) {
  // convert each array into an object (ES8+)
  const objA = { ...headA }
  const objB = { ...headB }

  //
  for (const num in objA) {
    if (objA[num] === objB[num]) {
      return objA[num] === objB[num]
    }
  }
  return null
};
