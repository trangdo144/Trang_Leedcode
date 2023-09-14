var haveConflict = function (event1, event2) {
  let check = false;
  if (event2[0].parseInt <= event1[1].parseInt && event2[1] >= event1[0]) {
    check = true;
  }
  if (event1[0] <= event2[1] && event1[1] >= event2[0]) {
    check = true;
  }
  return check;
};
