var groupAnagrams = function (strs) {
  let newStrs = [];
  strs.forEach((str) => {
    newStrs.push(str.split("").sort().join(""));
  });
  let map = new Map();
  let result = [];
  for (let i = 0; i < newStrs.length; i++) {
    if (!map.has(newStrs[i])) {
      map.set(newStrs[i], [strs[i]]);
      for (let j = i + 1; j < newStrs.length; j++) {
        if (newStrs[i] === newStrs[j]) {
          map.get(newStrs[i]).push(strs[j]);
        }
      }
    }
  }

  map.forEach((value, key) => {
    result.push(value);
  });
  return result;
};
