//leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
https: var findDisappearedNumbers = function (nums) {
  let result = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }
  return result;
};
