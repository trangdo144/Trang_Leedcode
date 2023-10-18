//leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
https: var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    let result = [];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == num) {
        return (result = [i, j]);
      }
    }
  }
};

var twoSum = function (numbers, target) {
  let remain;
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    remain = target - numbers[i];
    let left = i + 1;
    let right = numbers.length - 1;
    if (numbers[right] === remain) {
      result.push(i + 1);
      result.push(right + 1);
      return result;
    }
    while (left < right - 1) {
      let mid = left + Math.trunc((right - left) / 2);
      if (numbers[mid] > remain) {
        right = mid;
      } else if (numbers[mid] <= remain) {
        left = mid;
      }
    }
    if (numbers[left] === remain) {
      result.push(i + 1);
      result.push(left + 1);
      return result;
    }
  }
  return result;
};
