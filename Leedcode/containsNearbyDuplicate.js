var containsNearbyDuplicate = function (nums, k) {
  let check = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        check = true;
      }
    }
  }
  return check;
};
