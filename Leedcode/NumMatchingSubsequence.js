var numMatchingSubseq = function (s, words) {
  let subWord = s.split("");
  let index = [];

  for (let j = 0; j < words.length; j++) {
    wordList = words[j].split("");
    let checkIndex = 0;
    for (let i = 0; i < wordList.length; i++) {
      if (!subWord.includes(wordList[i]) && !index.includes(j)) {
        index.push(j);
      }
      if (subWord.includes(wordList[i])) {
        if (i < checkIndex && !index.includes(j)) {
          index.push(j);
        } else {
          checkIndex = subWord.indexOf(wordList[i]);
        }
      }
    }
  }
  return words.length - index.length;
};

abcde;
b;
acd;
aeb;
