var findErrorNums = function (nums) {
  let map = new Map();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      arr.push(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};
