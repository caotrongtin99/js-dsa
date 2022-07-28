/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
   const numsMap = new Map();
   for (let i = 0;i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [numsMap.get(target - nums[i]), i];
        } else {
            numsMap.set(nums[i], i)
        }
   }
};