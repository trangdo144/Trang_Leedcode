//leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
https: var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    count += countRowNegative(grid[i]);
  }
  return count;
};
function countRowNegative(arrs) {
  let left = 0;
  let right = arrs.length - 1;
  if (arrs[left] < 0) {
    return arrs.length;
  }
  if (arrs[right] >= 0) {
    return 0;
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (arrs[mid] >= 0) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return arrs.length - left - 1;
}
