//leetcode.com/problems/two-out-of-three/submissions/
https: var twoOutOfThree = function (nums1, nums2, nums3) {
  let arr12 = exitInArr(nums1, nums2);
  let arr13 = exitInArr(nums1, nums3);
  let arr23 = exitInArr(nums2, nums3);
  let arr123 = arr12.concat(arr13).concat(arr23);
  let result = Array.from(new Set(arr123));
  return result;
};

function exitInArr(arr1, arr2) {
  let arr = [];
  arr1.forEach((num) => {
    if (arr1.includes(num) && arr2.includes(num)) {
      arr.push(num);
    }
  });
  return arr;
}
