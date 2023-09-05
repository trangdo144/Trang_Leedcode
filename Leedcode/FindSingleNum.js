var singleNumber = function (nums) {
  //nums = [4, 1, 2, 1, 2];
  let checkNums = {};
  for (const num of nums) {
    //duyet mang
    if (num in checkNums) {
      //check key valid in object or not
      checkNums[num]++;
    } else {
      checkNums[num] = 1; //add new key
    }
  }
  for (let key in checkNums) {
    if (checkNums[key] == 1) {
      return key;
    }
  }

  let numMap = new Map();
  for (const num of nums) {
    if (numMap.has(num)) {
      numMap.set(num, 2);
    } else {
      numMap.set(num, 1);
    }
  }
  let result;
  numMap.forEach((value, key) => {
    if (value == 1) {
      result = key;
    }
  });
  return result;
};

singleNumber([4, 1, 2, 1, 2]);
