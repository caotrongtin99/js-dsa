/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const n = s.length;
  const L = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  for (let i = 0; i < n; i++) {
    L[i][i] = true;
  }

  let start = 0, end = 0 
  let max = 0
  for (let len = 2; len <=  n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1
      if (s[i] === s[j] && len === 2) {
        L[i][j] = true
      } else {
        L[i][j] = (s[i] === s[j] && L[i+1][j-1])
      }
      
      if (L[i][j] && (j - i) > max) {
        max = j - i
        start = i
        end = j
      }
    }
  }

  return s.substring(start, end + 1)
};