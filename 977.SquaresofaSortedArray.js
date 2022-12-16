/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  const res = []
  let start = 0, end = nums.length - 1, index = nums.length - 1
  while (start <= end) {
      if (nums[start] * nums[start] > nums[end] * nums[end]) {
          res[index] = nums[start] * nums[start]
          start++
      } else {
          res[index] = nums[end] * nums[end]
          end--
      }
      index--
  }
  return res
};