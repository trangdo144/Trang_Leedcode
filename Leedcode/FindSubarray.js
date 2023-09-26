//leetcode.com/problems/find-subarrays-with-equal-sum/
https: var findSubarrays = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    if (map.has(nums[i] + nums[i + 1])) {
      // map.set(nums[i]+ nums[i+1], map.get(nums[i]+ nums[i+1])+1);
      return true;
    } else {
      map.set(nums[i] + nums[i + 1], 1);
    }
  }
  return false;
};
