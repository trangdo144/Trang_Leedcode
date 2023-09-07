var maximizeSum = function (nums, k) {
  let maxNum = 0;
  nums.forEach((num) => {
    if (num > maxNum) {
      maxNum = num;
    }
  });
  let score = maxNum * k;
  for (let i = 1; i <= k - 1; i++) {
    score = score + i;
  }

  return score;
};
