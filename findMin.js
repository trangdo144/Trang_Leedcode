/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) {
    return nums[left];
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] > nums[left] && nums[left] > nums[right]) {
      left = mid;
    }
    if (nums[mid] < nums[right]) {
      right = mid;
    }
  }
  return nums[right];
};
