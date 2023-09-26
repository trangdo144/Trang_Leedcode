//leetcode.com/problems/find-lucky-integer-in-an-array/submissions/
https: var findLucky = function (arr) {
  let map = new Map();
  arr.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let check = -1;
  map.forEach((value, key) => {
    if (value === key && key > check) {
      check = key;
    }
  });
  return check;
};
