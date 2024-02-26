//  Professional Level

/**
 * Performs binary search to find the index of the target element in the sorted array.
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The target element to search for.
 * @returns {number} The index of the target element if found, otherwise -1.
 */
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
console.log(binarySearch(arr, target)); // Output: 5 (index of the target)
