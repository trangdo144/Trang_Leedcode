var intersection = function (nums1, nums2) {
  let intersectionList = [];
  nums1.forEach((num1) => {
    if (nums2.includes(num1) && !intersectionList.includes(num1)) {
      intersectionList.push(num1);
    }
  });
  return intersectionList;
};
