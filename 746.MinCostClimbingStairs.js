/**
 * Problem: https://leetcode.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    const n = cost.length
    if (!n) return 0
    const dp = new Int16Array(n + 1).fill(0)
    dp[n-1] = cost[n - 1]

    for (let i = n - 2; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2])
    }
    return Math.min(dp[0], dp[1])
};