var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  let result;
  if (nums[left] > target) {
    result = left;
  }
  if (nums[right] > target) {
    result = right;
  } else {
    result = right + 1;
  }
  return result;
};
