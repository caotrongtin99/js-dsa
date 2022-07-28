/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  const maxLength = Math.max(a.length, b.length)
  let currentAIndex = a.length - 1
  let currentBIndex = b.length - 1
  const stack = []
  let remember = 0
  
  while (a[currentAIndex] || b[currentBIndex]) {
      const sum = Number(a[currentAIndex] || 0) + Number(b[currentBIndex] || 0) + remember
      if (sum < 2) {
          stack.push(sum)
          remember = 0
      } else {
          stack.push(sum - 2)
          remember = 1
      }
      currentAIndex--
      currentBIndex--
  }
  
  if (remember) stack.push(remember)
  
  return stack.reverse().join('')
};