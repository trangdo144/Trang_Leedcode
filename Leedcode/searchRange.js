/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [];
  let lastIndex = findLastIndex(nums, target);
  let fistIndex = findFirstIndex(nums, target);
  result.push(fistIndex);
  result.push(lastIndex);
  return result;
};
function findLastIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] === target) {
    return right;
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] <= target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  if (nums[left] === target) {
    return left;
  }
  return -1;
}
function findFirstIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] === target) {
    return left;
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] >= target) {
      right = mid;
    }
  }
  if (nums[right] === target) {
    return right;
  }
  return -1;
}
