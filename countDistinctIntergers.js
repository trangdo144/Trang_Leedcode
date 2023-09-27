//leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/submissions/
https: var countDistinctIntegers = function (nums) {
  nums.forEach((num) => {
    let newNum = parseFloat(num.toString().split("").reverse().join(""));
    nums.push(newNum);
  });
  let set = new Set(nums);

  return set.size;
};
