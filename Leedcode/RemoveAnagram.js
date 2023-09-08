var removeAnagrams = function (words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let newWord = words[i].split("").sort().join("");
    newWords.push(newWord);
  }
  let indexList = [];
  for (let i = 0; i < newWords.length; i++) {
    if (newWords[i] == newWords[i + 1] && !indexList.includes(i + 1)) {
      indexList.push(i + 1);
    }
  }

  //   for (let i = 0; i < newWords.length; i++) {
  //     for (let j = i + 1; j < newWords.length; j++) {
  //       if (newWords[i] == newWords[j] && !indexList.includes(j)) {
  //         indexList.push(j);
  //       }
  //     }
  //   }
  let resultList = [];
  for (let i = 0; i < words.length; i++) {
    if (!indexList.includes(i)) {
      resultList.push(words[i]);
    }
  }

  return resultList;
};
