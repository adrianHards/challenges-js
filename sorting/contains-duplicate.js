const containsDuplicate = (nums) => {
  return nums.length === new Set(nums).size
}

testArr = [1, 2, 1, 3]
console.log(containsDuplicate(testArr))
