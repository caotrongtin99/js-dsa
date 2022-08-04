/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  let startWhiteIndex = 0
  let startBlueIndex = 0
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          startWhiteIndex++
          startBlueIndex++
      } else if (nums[i] === 1) {
          startBlueIndex++
      }
  }
   
  for (let i = 0; i < nums.length; i++) {
      if (i < startWhiteIndex) {
          nums[i] = 0
      } else if (i < startBlueIndex) {
          nums[i] = 1
      } else {
          nums[i] = 2
      }
  }
};