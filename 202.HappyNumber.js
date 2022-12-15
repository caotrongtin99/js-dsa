/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  const circleNumbersHash = {}
  while (n !== 1 && !circleNumbersHash[n]) {
      circleNumbersHash[Number(n)] = true
      const splitedNumbers = n.toString().split('')
      n = splitedNumbers.reduce((acc, cur) => acc + cur * cur, 0)
  }
  return n === 1
};
