var sortPeople = function (names, heights) {
  let map = new Map();
  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }
  let sortHeights = [];
  let result = [];
  sortHeights = heights.sort((a, b) => b - a);
  sortHeights.forEach((height) => {
    result.push(map.get(height));
  });
  return result;
};
