var maxNumberOfBalloons = function (text) {
  let map = new Map();
  let textList = text.split("");
  textList.forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  });
  let balloonMap = new Map([
    ["b", "1"],
    ["a", "1"],
    ["l", "2"],
    ["o", "2"],
    ["n", "1"],
  ]);
  let check = Number.MAX_SAFE_INTEGER;
  let test = true;
  balloonMap.forEach((value, key) => {
    if (map.has(key)) {
      if (map.get(key) / value < check) {
        check = Math.floor(map.get(key) / value);
      }
    } else {
      test = false;
    }
  });
  if (test == true) {
    return check;
  } else {
    return 0;
  }
};
