var mergeSimilarItems = function (items1, items2) {
  let map = new Map();
  for (let i = 0; i < items1.length; i++) {
    if (map.has(items1[i][0])) {
      map.set(items1[i][0], map.get(items1[i][0]) + items1[i][1]);
    } else map.set(items1[i][0], items1[i][1]);
  }
  for (let i = 0; i < items2.length; i++) {
    if (map.has(items2[i][0])) {
      map.set(items2[i][0], map.get(items2[i][0]) + items2[i][1]);
    } else map.set(items2[i][0], items2[i][1]);
  }
  let sortKey = Array.from(map.keys()).sort((a, b) => {
    return a - b;
  });
  let result = [];
  sortKey.forEach((key) => {
    result.push([key, map.get(key)]);
  });
  return result;
};
