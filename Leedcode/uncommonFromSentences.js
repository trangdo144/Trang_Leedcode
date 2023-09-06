var uncommonFromSentences = function (s1, s2) {
  let map = new Map();
  let combineList = [];
  combineList = s1.split(" ").concat(s2.split(" "));
  combineList.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get + 1);
    } else {
      map.set(element, 1);
    }
  });
  let uncommonList = [];
  map.forEach((value, key) => {
    if (value == 1) {
      uncommonList.push(key);
    }
  });
  return uncommonList;
};
