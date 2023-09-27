//leetcode.com/problems/find-common-characters/submissions/
https: var commonChars = function (words) {
  let firstMap = mapWord(words[0]);
  let result = [];
  firstMap.forEach((value, key) => {
    let check = true;
    let time = value;
    words.forEach((word) => {
      let map = mapWord(word);
      if (map.has(key) && map.get(key) < time) {
        time = map.get(key);
      }
      if (!map.has(key)) {
        check = false;
      }
    });
    if (check === true) {
      for (let i = 1; i <= check; i++) {
        result.push(key);
      }
    }
  });
  return result;
};

function mapWord(word) {
  let map = new Map();
  let wordList = word.split("");
  wordList.forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });
  return map;
}
