/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let set = new Set();
  nums.forEach((num) => {
    set.add(num);
  });
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
};
