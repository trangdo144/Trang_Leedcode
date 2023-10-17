/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right - 1) {
    let mid = left + Math.trunc((right - left) / 2);
    if (arr[mid] > arr[right] && arr[mid] < arr[mid - 1]) {
      right = mid;
    }
    if (arr[mid] > arr[left] && arr[mid] < arr[mid + 1]) {
      left = mid;
    }
    if (arr[mid] > arr[left] && arr[mid] > arr[right]) {
      left = mid;
    }
  }
  return left;
};
