var countConsistentStrings = function (allowed, words) {
  let newAllowed = Array.from(new Set(allowed));
  let arr = [];
  words.forEach((word) => {
    let newWordList = Array.from(new Set(word.split("")));
    newWordList.forEach((char) => {
      if (!newAllowed.includes(char) && !arr.includes(newWordList)) {
        arr.push(newWordList);
      }
    });
  });
  return words.length - arr.length;
};
