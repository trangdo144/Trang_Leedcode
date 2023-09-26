var prefixCount = function (words, pref) {
  //   let newPref = pref.split("");
  //   let check = true;
  //   let count = 0;
  //   words.forEach((word) => {
  //     let newWord = word.split("");
  //     for (let i = 0; i < newPref.length; i++) {
  //       if (newPref[i] != newWord[i]) {
  //         check = false;
  //       }
  //     }
  //     if (check != false) {
  //       count++;
  //     }
  //   });
  //   return count;

  let count = 0;
  words.forEach((word) => {
    if (word.split("")[0] == pref.split("")[0] && word.includes(pref)) {
      count++;
    }
  });
  return count;
};
