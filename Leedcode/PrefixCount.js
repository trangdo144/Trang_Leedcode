//leetcode.com/problems/counting-words-with-a-given-prefix/submissions/
https: var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach((word) => {
    if (checkPref(word, pref) == true) {
      count++;
    }
  });
  return count;
};
function checkPref(word, pref) {
  let wordList = word.split("");
  let prefList = pref.split("");
  for (let i = 0; i < prefList.length; i++) {
    if (!wordList.includes(prefList[i]) || wordList[i] != prefList[i]) {
      return false;
    }
  }
  return true;
}
