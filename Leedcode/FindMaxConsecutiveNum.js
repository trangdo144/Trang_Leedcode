var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;
  nums.forEach((num) => {
    if (num == 1) {
      count++;
      if (max < count) {
        max = count;
      }
    } else {
      count = 0;
    }
  });
  return max;
};
