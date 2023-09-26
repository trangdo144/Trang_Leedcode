//leetcode.com/problems/distribute-candies/submissions/
https: var distributeCandies = function (candyType) {
  let set = new Set();
  candyType.forEach((candy) => {
    set.add(candy);
  });
  if (candyType.length / 2 > set.size) {
    return set.size;
  } else {
    return candyType.length / 2;
  }
};
