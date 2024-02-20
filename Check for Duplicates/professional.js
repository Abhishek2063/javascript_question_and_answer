/**
 * Checks if an array contains any duplicates.
 * @param {number[]} nums - The input array of numbers.
 * @returns {boolean} True if the array contains duplicates, false otherwise.
 */
const containsDuplicate = (nums) => {
  const map = {};
  for (let num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 2, 3, 4, 1])); // Output: true
