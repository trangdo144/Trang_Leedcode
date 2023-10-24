/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  s.split("").forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });
  let arr = [];
  map.forEach((value, key) => {
    arr.push([key, value]);
  });
  let sortString = "";
  arr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    sortString += arr[i][0].repeat(arr[i][1]);
  }

  return sortString;
};
