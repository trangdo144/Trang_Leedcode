var kthDistinct = function (arr, k) {
  let map = new Map();
  arr.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  let check = null;
  let count = 0;
  map.forEach((value, key) => {
    if (value == 1) {
      count++;
      if (count == k) {
        check = key;
      }
    }
  });
  if (check != null) {
    return check;
  } else {
    return "";
  }
};

kthDistinct(["d", "b", "c", "b", "c", "a"], 2);
