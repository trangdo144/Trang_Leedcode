//leetcode.com/problems/number-of-distinct-averages/submissions/
https: var distinctAverages = function (nums) {
  let set = new Set();
  while (nums.length >= 2) {
    set.add(CalculateAver(nums));
  }
  return set.size;
};
function CalculateAver(nums) {
  let sortNum = nums.sort((a, b) => a - b);
  aver = (sortNum[0] + sortNum[sortNum.length - 1]) / 2;
  sortNum.pop();
  sortNum.shift();
  return aver;
}
