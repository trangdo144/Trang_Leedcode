//leetcode.com/problems/search-a-2d-matrix-ii/submissions/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
https: var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    result = findTarget(matrix[i], target);
    if (findTarget(matrix[i], target)) {
      return true;
    }
  }
  return false;
};

function findTarget(arrs, target) {
  let left = 0;
  let right = arrs.length - 1;
  if (arrs[right] === target) {
    return true;
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (arrs[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (arrs[left] === target) {
    return true;
  }
  return false;
}
