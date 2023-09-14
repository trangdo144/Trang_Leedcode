var stringMatching = function (words) {
  let result = [];
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i]) && !result.includes(words[i])) {
        result.push(words[i]);
      }
    }
  }
  return result;
};
