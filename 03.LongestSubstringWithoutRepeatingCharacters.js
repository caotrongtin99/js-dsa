/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const countingCharArr = new Array(128).fill(0)
  let leftIndex = 0, rightIndex = 0;
  let result = 0;

  while (rightIndex < s.length) {
    const rightIndexCharCode = s.charCodeAt(rightIndex)
    countingCharArr[rightIndexCharCode]++
    while (countingCharArr[rightIndexCharCode] > 1) {
      const leftIndexCharCode = s.charCodeAt(leftIndex)
      countingCharArr[leftIndexCharCode]--
      leftIndex++
    }
    result = Math.max(result, rightIndex - leftIndex + 1)
    rightIndex++
  }
return result
};