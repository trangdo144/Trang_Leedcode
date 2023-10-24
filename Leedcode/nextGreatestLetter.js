//leetcode.com/problems/find-smallest-letter-greater-than-target/submissions/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
https: var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  if (letters[left] >= target) {
    return letters[left];
  }
  if (letter[right] < target) {
    return letters[left];
  }
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return letters[right];
};
