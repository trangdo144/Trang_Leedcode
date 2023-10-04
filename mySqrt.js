//leetcode.com/problems/sqrtx/submissions/
https: var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (Math.pow(mid) > x) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
};
