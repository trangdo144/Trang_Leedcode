//leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
https: var findMaxK = function (nums) {
  let check = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0 && check < Math.abs(nums[i])) {
        check = Math.abs(nums[i]);
      }
    }
  }
  return check;
};
