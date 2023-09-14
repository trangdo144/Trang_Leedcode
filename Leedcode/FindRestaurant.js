var findRestaurant = function (list1, list2) {
  let map = new Map();
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j] && !map.has(list1[i])) {
        map.set(list1[i], i + j);
      }
    }
  }
  let check = Number.MAX_SAFE_INTEGER;
  map.forEach((value, key) => {
    if (value < check) {
      check = value;
    }
  });
  let result = [];
  map.forEach((value, key) => {
    if (value === check) {
      result.push(key);
    }
  });
  return result;
};

findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]);
