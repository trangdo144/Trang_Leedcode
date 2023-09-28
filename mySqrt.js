//leetcode.com/problems/sqrtx/submissions/
https: var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (Math.pow(mid) === x) return mid;
    if (Math.pow(mid) > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (Math.pow(left) > x) {
    return left - 1;
  } else {
    return left;
  }
};
