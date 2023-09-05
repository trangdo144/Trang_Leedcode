var singleNumber = function (nums) {
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
    if (value == 1) {
      result = key;
    }
  });
  return result;
};
