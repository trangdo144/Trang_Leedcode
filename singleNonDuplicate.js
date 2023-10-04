//leetcode.com/problems/single-element-in-a-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
https: var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length;
  while (left < right - 1) {
    mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] === nums[mid - 1] && mid % 2 === 0) {
      right = mid;
    } else if (nums[mid] === nums[mid + 1] && mid % 2 === 0) {
      left = mid;
    } else if (nums[mid] === nums[mid - 1] && mid % 2 === 1) {
      left = mid;
    } else if (nums[mid] === nums[mid + 1] && mid % 2 === 1) {
      right = mid;
    } else {
      return nums[mid];
    }
  }
  return nums[left];
};
