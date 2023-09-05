var majorityElement = function (nums) {
  let map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let result;
  map.forEach((value, key) => {
    if (value >= nums.length / 2) {
      result = key;
    }
  });
  return result;
};
