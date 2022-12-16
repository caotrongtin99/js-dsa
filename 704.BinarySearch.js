/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let start = 0, end = nums.length -1

  while (start <= end) {
      const center = Math.round((start + end) / 2)
      const mid = nums[center]

      if (mid === target) {
          return center
      } else if (mid > target) {
          end = center - 1
      } else {
          start = center + 1
      }
  }

  return -1
};