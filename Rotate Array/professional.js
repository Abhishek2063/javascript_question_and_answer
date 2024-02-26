//  Professional Level

/**
 * Rotates an array to the right by k steps.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate.
 * @returns {number[]} The rotated array.
 */
const rotateArray = (nums, k) => {
  const n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
}

/**
 * Reverses the elements of an array within a given range.
 * @param {number[]} nums - The array to reverse.
 * @param {number} start - The starting index of the range.
 * @param {number} end - The ending index of the range.
 */
const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
