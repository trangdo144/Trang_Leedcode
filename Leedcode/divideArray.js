var divideArray = function (nums) {
  let map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let check = false;
  map.forEach((value, key) => {
    if (value % 2 === 0) {
      check = true;
    }
  });
  return check;
};
