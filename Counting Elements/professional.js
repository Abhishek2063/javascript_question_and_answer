/**
 * Counts the number of elements in an array that are strictly smaller than all elements after it.
 * @param {number[]} nums - The input array of integers.
 * @returns {number} The count of elements that are strictly smaller than all elements after it.
 */
const countElements = (nums) => {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums.every((num, index) => index <= i || nums[i] < num)) {
      count++;
    }
  }
  return count;
};

console.log(countElements([3, 1, 4, 1, 5, 9, 2, 6])); // Output: 4
