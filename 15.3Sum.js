/**
 * Problem: https://leetcode.com/problems/3sum
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const triplets = []
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i-1])  continue
      let j = i + 1;
      let k = nums.length - 1
      
      while (j < k) {
          const sum = nums[i] + nums[j] + nums[k]
          if (sum === 0) {
              triplets.push([nums[i], nums[j], nums[k]])
              k--
              j++
              while (j < k && nums[j] === nums[j-1]) {
                  j += 1;
              }
              while (j < k && nums[k] === nums[k+1]) {
                  k -= 1;
              }
          } else if (sum > 0) {
              k--  
          } else {
              j++
          }
      }
  }
  
  return triplets
};