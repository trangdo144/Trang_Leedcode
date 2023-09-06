var sumOfUnique = function (nums) {
  let map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get + 1);
    } else {
      map.set(num, 1);
    }
  });
  let sum = 0;
  map.forEach((value, key) => {
    if (value == 1) {
      sum += key;
    }
  });
  return sum;
};
