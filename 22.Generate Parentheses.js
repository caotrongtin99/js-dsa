/**
 *  * URL: https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */

 const isValidPerenthesis = (str) => {
  let openCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openCount++
    } else {
      if (openCount === 0) return false
      openCount--
    }
  }
  return openCount === 0
}

var generateParenthesis = function(n) {
  if (n === 0) return []  
  const slots = 2 * n
  const generate = (cur = ['(', ')']) => {
    if (cur[0].length === slots) {
      return cur
    }

    const L = []
    for (item of cur) {
      L.push(item + '(', item + ')')
    }
    return generate(L)
  }

  const set = generate()

  return set.filter(item => isValidPerenthesis(item))
};