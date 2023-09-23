var isIsomorphic = function (s, t) {
  let newS = s.split("");
  let newT = t.split("");
  let mapS = new Map();
  let mapT = new Map();
  for (let i = 0; i < newS.length; i++) {
    if (mapS.has(newS[i])) {
      mapS.get(newS[i]).push(i);
    } else {
      mapS.set(newS[i], [i]);
    }
  }
  let arrayS = [];
  mapS.forEach((value, key) => {
    arrayS.push(value);
  });
  for (let i = 0; i < newT.length; i++) {
    if (mapT.has(newT[i])) {
      mapT.get(newT[i]).push(i);
    } else {
      mapT.set(newT[i], [i]);
    }
  }
  let arrayT = [];
  mapT.forEach((value, key) => {
    arrayT.push(value);
  });
  for (let i = 0; i < arrayS.length; i++) {
    if (checkEqual(arrayS[i], arrayT[i]) === false) {
      return false;
    }
  }
  return true;
};

function checkEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
