//leetcode.com/problems/find-peak-element/
https: var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] > nums[left + 1]) {
    return left;
  }
  if (nums[right] > nums[right - 1]) {
    return right;
  }

  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      right = mid;
    }
    if (nums[mid] < nums[mid + 1]) {
      left = mid;
    }
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
  }
  return left;
};
