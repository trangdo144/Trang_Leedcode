var similarPairs = function (words) {
  let map = new Map();
  words.forEach((word) => {
    newWord = Array.from(new Set(word)).sort().join("");
    if (map.has(newWord)) {
      map.set(newWord, map.get(newWord) + 1);
    } else {
      map.set(newWord, 1);
    }
  });
  let count = 0;
  map.forEach((value, key) => {
    if (value >= 2) {
      for (let i = 1; i < value; i++) {
        count = count + i;
      }
    }
  });
  return count;
};
