/**
 * Problem: https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1,1]]
  const rows = [[1], [1,1]]

  for (let i = 2; i < numRows; i++) {
      rows.push([])
      rows[i][0] = 1
      rows[i][i] = 1

      for (let j = 1; j < i; j++) {
          rows[i][j] = rows[i-1][j - 1] + rows[i-1][j]
      }
  }
  
  return rows
};