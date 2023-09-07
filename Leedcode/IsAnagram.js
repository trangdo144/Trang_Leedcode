var isAnagram = function (s, t) {
  let sortS = s.split("").sort().join("");
  let sortT = t.split("").sort().join("");
  let check = false;
  if (sortS === sortT) {
    check = true;
  }
  return check;
};
