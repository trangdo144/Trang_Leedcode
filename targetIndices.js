/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let countLess = 0;
  let countEqual = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      countEqual++;
    }
    if (nums[i] < target) {
      countLess++;
    }
  }
  let result = [];
  for (let i = 0; i < countEqual; i++) {
    result.push(countLess + i);
  }
  return result;
};
