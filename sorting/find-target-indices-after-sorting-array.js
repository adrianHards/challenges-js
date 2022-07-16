const targetIndices = (nums, target) => {
  // create an empty answer array
  answerArr = []

  // sort the nums in ascending order.
  // a is first element for comparison, b is the second
  // if a - b returns a negative value, the value in a will be ordered before b.
  // if a - b returns 0, the ordering of a and b won’t change.
  // if a - b returns a positive value, the value in b will be ordered before a.
  nums.sort((a, b) => { return a - b });

  // loop over newly sorted nums array and use for ... in so we have access to index
  for (index in nums) {
    // if the value of nums[index] matches our target
    if (nums[index] === target) {
      // push to our answers array
      answerArr.push(index)
    }
  }
  // return the answers array
  return answerArr
};
