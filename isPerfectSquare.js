//leetcode.com/problems/valid-perfect-square/submissions/
/**
 * @param {number} num
 * @return {boolean}
 */
https: var isPerfectSquare = function (num) {
  if (num === 1) {
    return true;
  }
  let left = 1;
  let right = num;
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (mid * mid > num) {
      right = mid;
    } else if (mid * mid < num) {
      left = mid;
    } else {
      return true;
    }
  }
  return false;
};
