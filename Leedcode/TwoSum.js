var twoSum = function (nums, target) {
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
